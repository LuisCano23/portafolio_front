import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Button, Modal, Form, 
  Pagination, Spinner, Alert, Badge
} from 'react-bootstrap';
import { 
  FaComment, FaPlus, FaCalendar, FaUser, FaArrowLeft, 
  FaArrowRight, FaPaperPlane, FaExclamationTriangle,
  FaLeaf, FaWater, FaTimes, FaCheck
} from 'react-icons/fa';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import axios from 'axios';

const Comments = () => {
  // Estados para los comentarios y paginación
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalComments, setTotalComments] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Estados para el modal y formulario
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    comentario: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const commentsPerPage = 6;
  const API_URL = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_API_URL || 'https://portafolio-back-lemon.vercel.app'
  : 'http://localhost:5000';

  // Cargar comentarios del backend
  useEffect(() => {
    fetchComments();
  }, [currentPage]);

  const fetchComments = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_URL}/api/comments?page=${currentPage}&limit=${commentsPerPage}`);
      
      if (response.data.success) {
        setComments(response.data.comments);
        setTotalPages(response.data.totalPages);
        setTotalComments(response.data.totalComments);
      } else {
        setError('Error al cargar comentarios');
      }
    } catch (err) {
      console.error('Error fetching comments:', err);
      setError('No se pudieron cargar los comentarios. Verifica la conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo específico
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Manejar el captcha
  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
    setCaptchaError('');
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken('');
    setCaptchaError('El captcha ha expirado. Completa el captcha nuevamente.');
  };

  const handleCaptchaError = (err) => {
    console.error('Captcha Error:', err);
    setCaptchaError('Error con el captcha. Intenta de nuevo.');
  };

  // Validar formulario
  const validateForm = () => {
    const errors = {};
    
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length < 2) {
      errors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (!formData.comentario.trim()) {
      errors.comentario = 'El comentario es requerido';
    } else if (formData.comentario.length < 10) {
      errors.comentario = 'El comentario debe tener al menos 10 caracteres';
    } else if (formData.comentario.length > 1000) {
      errors.comentario = 'El comentario no puede exceder 1000 caracteres';
    }
    
    if (!captchaToken) {
      setCaptchaError('Por favor, completa la verificación captcha');
    }
    
    return errors;
  };

  // Enviar el comentario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormErrors({});
    setFormSuccess('');
    setCaptchaError('');
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        captchaToken
      };
      
      const response = await axios.post(`${API_URL}/api/comments`, payload);
      
      if (response.data.success) {
        setFormSuccess('¡Gracias! Tu comentario ha sido enviado exitosamente.');
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          comentario: ''
        });
        
        setCaptchaToken('');
        
        // Recargar comentarios después de 2 segundos
        setTimeout(() => {
          fetchComments();
          handleCloseModal();
        }, 2000);
        
      } else {
        setFormErrors({ submit: response.data.error || 'Error al enviar el comentario' });
      }
    } catch (err) {
      console.error('Error al enviar comentario:', err);
      setFormErrors({ submit: 'Error al enviar el comentario. Intenta de nuevo.' });
    } finally {
      setFormSubmitting(false);
    }
  };

  // Paginación
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Formatear fecha
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return dateString;
  };

  // Resetear modal
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ nombre: '', comentario: '' });
    setCaptchaToken('');
    setFormErrors({});
    setFormSuccess('');
  };

  // Renderizar botones de paginación
  const renderPaginationButtons = () => {
    const buttons = [];
    
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Pagination.Item 
          key={i} 
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
          style={{
            backgroundColor: i === currentPage ? 'var(--emerald)' : 'transparent',
            borderColor: 'var(--teal)',
            color: i === currentPage ? 'white' : 'var(--teal)',
            margin: '0 2px'
          }}
        >
          {i}
        </Pagination.Item>
      );
    }
    
    return buttons;
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="py-5">
          <Spinner animation="border" style={{ color: 'var(--emerald)' }} />
          <p className="mt-3" style={{ color: 'var(--teal)' }}>
            Cargando comentarios...
          </p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <div className="mb-3" style={{ fontSize: '3rem', color: 'var(--aqua-green)' }}>
            <FaComment />
          </div>
          <h2 className="mb-3" style={{ color: 'var(--emerald)' }}>Error al cargar</h2>
          <p className="lead" style={{ color: 'var(--teal)' }}>{error}</p>
          <Button 
            onClick={fetchComments} 
            className="btn-frutiger mt-3"
          >
            Reintentar
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5 fade-in">
      {/* Header con decoración */}
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center mb-3">
          <div className="mx-2 float-animation" style={{ 
            animationDelay: '0s',
            fontSize: '2rem',
            color: 'var(--emerald)'
          }}>
            <FaLeaf />
          </div>
          <div className="mx-2 float-animation" style={{ 
            animationDelay: '0.3s',
            fontSize: '2rem',
            color: 'var(--aqua-green)'
          }}>
            <FaWater />
          </div>
          <div className="mx-2 float-animation" style={{ 
            animationDelay: '0.6s',
            fontSize: '2rem',
            color: 'var(--emerald)'
          }}>
            <FaComment />
          </div>
        </div>
        <h1 className="display-4 fw-bold text-gradient mb-3">
          Comentarios generales
        </h1>
        <p className="lead fs-4 mb-4" style={{ color: 'var(--teal)' }}>
          Comparte tu opinión, sugerencia o simplemente deja un saludo
        </p>
        
        {/* Botón para agregar comentario */}
        <div className="glass-card p-4 d-inline-block" style={{ 
          borderRadius: '20px',
          maxWidth: '600px',
          background: 'rgba(255, 255, 255, 0.2)'
        }}>
          <h5 className="mb-3" style={{ color: 'var(--emerald)' }}>
            ¿Quieres dejar un comentario?
          </h5>
          <p className="mb-4" style={{ color: 'var(--teal)' }}>
            Tu opinión es importante para mí
          </p>
          <Button 
            onClick={() => setShowModal(true)}
            className="btn-frutiger px-5 py-3"
            style={{
              background: 'var(--gradient-emerald)',
              fontSize: '1.1rem'
            }}
          >
            <FaPlus className="me-2" />
            Agregar Comentario
          </Button>
        </div>
      </div>

      {/* Estadísticas */}
      <Row className="mb-4">
        <Col md={4} sm={6} className="mb-3">
          <div className="glass-card p-3 text-center h-100">
            <div className="display-6 fw-bold text-gradient mb-2">
              {totalComments}
            </div>
            <div style={{ color: 'var(--teal)' }}>
              Comentarios Totales
            </div>
          </div>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <div className="glass-card p-3 text-center h-100">
            <div className="display-6 fw-bold text-gradient mb-2">
              {comments.length}
            </div>
            <div style={{ color: 'var(--teal)' }}>
              En esta página
            </div>
          </div>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <div className="glass-card p-3 text-center h-100">
            <div className="display-6 fw-bold text-gradient mb-2">
              {currentPage}/{totalPages}
            </div>
            <div style={{ color: 'var(--teal)' }}>
              Página actual
            </div>
          </div>
        </Col>
      </Row>

      {/* Lista de comentarios */}
      {comments.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem', color: 'var(--aqua-green)' }}>
            <FaComment />
          </div>
          <h2 className="mb-3" style={{ color: 'var(--emerald)' }}>Aún no hay comentarios</h2>
          <p className="lead mb-4" style={{ color: 'var(--teal)', maxWidth: '600px', margin: '0 auto' }}>
            Sé el primero en compartir tu comentario. 
            Tu opinión será de gran ayuda para mejorar.
          </p>
          <Button 
            onClick={() => setShowModal(true)}
            className="btn-frutiger px-5 py-3 mt-3"
            style={{
              background: 'var(--gradient-emerald)',
              fontSize: '1.1rem'
            }}
          >
            <FaPlus className="me-2" />
            Ser el Primero en Comentar
          </Button>
        </div>
      ) : (
        <>
          {/* Comentarios */}
          <div className="mb-5">
            {comments.map((comment) => (
              <Card key={comment.id} className="glass-card border-0 mb-4">
                <Card.Body className="p-4">
                  <Row className="align-items-center mb-3">
                    <Col xs="auto">
                      <div className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'var(--gradient-aqua)',
                          color: 'white',
                          fontSize: '1.2rem'
                        }}
                      >
                        <FaUser />
                      </div>
                    </Col>
                    <Col>
                      <h5 className="mb-1 fw-bold" style={{ color: 'var(--emerald)' }}>
                        {comment.nombre}
                      </h5>
                      <div className="d-flex align-items-center" style={{ color: 'var(--aqua-green)' }}>
                        <FaCalendar className="me-2" size={14} />
                        <small>{formatDate(comment.fecha_formateada)}</small>
                      </div>
                    </Col>
                  </Row>
                  <p className="mb-0" style={{ 
                    color: 'var(--teal)',
                    lineHeight: '1.6',
                    fontSize: '1.05rem'
                  }}>
                    {comment.comentario}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <Card className="glass-card border-0">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0" style={{ color: 'var(--teal)' }}>
                      Página {currentPage} de {totalPages}
                    </p>
                  </div>
                  
                  <Pagination className="mb-0">
                    <Pagination.Prev 
                      onClick={handlePrevPage} 
                      disabled={currentPage === 1}
                      style={{ 
                        borderColor: 'var(--teal)',
                        color: currentPage === 1 ? '#ccc' : 'var(--teal)'
                      }}
                    >
                      <FaArrowLeft />
                    </Pagination.Prev>
                    
                    {renderPaginationButtons()}
                    
                    <Pagination.Next 
                      onClick={handleNextPage} 
                      disabled={currentPage === totalPages}
                      style={{ 
                        borderColor: 'var(--teal)',
                        color: currentPage === totalPages ? '#ccc' : 'var(--teal)'
                      }}
                    >
                      <FaArrowRight />
                    </Pagination.Next>
                  </Pagination>
                </div>
              </Card.Body>
            </Card>
          )}
        </>
      )}

      {/* Elementos decorativos flotantes */}
      <div className="position-relative mt-5" style={{ height: '50px' }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="position-absolute float-animation"
            style={{
              width: `${10 + i * 6}px`,
              height: `${10 + i * 6}px`,
              background: i % 2 === 0 ? 'var(--gradient-aqua)' : 'var(--gradient-emerald)',
              borderRadius: '50%',
              left: `${i * 17}%`,
              top: `${Math.sin(i) * 20}px`,
              opacity: 0.3,
              animationDelay: `${i * 0.4}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* ========== MODAL PARA AGREGAR COMENTARIO ========== */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        centered
        size="lg"
        className="glass-modal"
      >
        <Modal.Header className="border-0" style={{
          background: 'var(--gradient-glass)',
          borderRadius: '20px 20px 0 0',
          padding: '1.5rem'
        }}>
          <Modal.Title className="fw-bold" style={{ color: 'var(--emerald)' }}>
            <FaComment className="me-2" />
            Agregar Comentario
          </Modal.Title>
          <Button 
            variant="link" 
            onClick={handleCloseModal}
            style={{ color: 'var(--teal)', fontSize: '1.5rem' }}
          >
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body className="p-4" style={{ 
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)'
        }}>
          {formErrors.submit && (
            <Alert variant="danger" onClose={() => setFormErrors({})} dismissible className="mb-4">
              {formErrors.submit}
            </Alert>
          )}
          
          {formSuccess && (
            <Alert variant="success" className="mb-4">
              <FaCheck className="me-2" />
              {formSuccess}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'var(--teal)', fontWeight: '500' }}>
                <FaUser className="me-2" />
                Tu Nombre *
              </Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Cómo te llamas"
                isInvalid={!!formErrors.nombre}
                className="glass-input"
                style={{
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'var(--dark-color)',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              {formErrors.nombre && (
                <Form.Control.Feedback type="invalid">
                  {formErrors.nombre}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'var(--teal)', fontWeight: '500' }}>
                <FaComment className="me-2" />
                Tu Comentario *
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="comentario"
                value={formData.comentario}
                onChange={handleInputChange}
                placeholder="Escribe tu comentario aquí..."
                isInvalid={!!formErrors.comentario}
                className="glass-input"
                style={{
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'var(--dark-color)',
                  borderRadius: '12px',
                  padding: '12px',
                  resize: 'none'
                }}
              />
              {formErrors.comentario && (
                <Form.Control.Feedback type="invalid">
                  {formErrors.comentario}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted d-flex justify-content-between">
                <span>Mínimo 10 caracteres • Máximo 1000 caracteres</span>
                <span>{formData.comentario.length}/1000</span>
              </Form.Text>
            </Form.Group>

            {/* Captcha - Misma clave de prueba que en References.jsx */}
            <Form.Group className="mb-4">
              <div className="glass-card p-3 mb-2" style={{ borderRadius: '12px' }}>
                <HCaptcha
                  sitekey={process.env.REACT_APP_HCAPTCHA_SITE_KEY}
                  onVerify={handleCaptchaVerify}
                  onExpire={handleCaptchaExpire}
                  onError={handleCaptchaError}
                />
              </div>
              {captchaError && (
                <Alert variant="danger" className="py-2">
                  {captchaError}
                </Alert>
              )}
              <Form.Text className="text-muted">
                Esta verificación ayuda a prevenir spam
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-between mt-4">
              <Button
                variant="outline"
                className="btn-frutiger-secondary"
                onClick={handleCloseModal}
                disabled={formSubmitting}
              >
                <FaTimes className="me-2" />
                Cancelar
              </Button>
              <Button
                type="submit"
                className="btn-frutiger"
                disabled={formSubmitting}
              >
                {formSubmitting ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="me-2" />
                    Enviar Comentario
                  </>
                )}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Comments;