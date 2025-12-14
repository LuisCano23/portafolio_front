import React, { useState, useEffect, useRef } from 'react';
import { 
  Container, Row, Col, Card, Button, Spinner, Badge, 
  Modal, Form, Alert 
} from 'react-bootstrap';
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaUser, 
  FaBriefcase, 
  FaEnvelope, 
  FaCalendarAlt,
  FaChevronLeft, 
  FaChevronRight,
  FaLeaf,
  FaWater,
  FaStar,
  FaPause,
  FaPlay,
  FaPlus,
  FaPaperPlane,
  FaTimes,
  FaLock,
  FaCheck
} from 'react-icons/fa';
// import HCaptcha from '@hcaptcha/react-hcaptcha'; // Temporalmente desactivado
import { referenciasApi } from '../../services/api';

const References = () => {
  const [referencias, setReferencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Estados para el modal y formulario
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    titulo: '',
    correo: '',
    carta: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState(''); // Temporalmente desactivado
  // const [captchaError, setCaptchaError] = useState(''); // Temporalmente desactivado
  
  const autoPlayRef = useRef();
  // const captchaRef = useRef(); // Temporalmente desactivado
  const intervalTime = 5000;

  // Cargar referencias del backend
  useEffect(() => {
    fetchReferencias();
  }, []);

  // Controlar el autoplay
  useEffect(() => {
    if (autoPlay && !isHovering && referencias.length > 1) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, intervalTime);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, isHovering, referencias.length]);

  const fetchReferencias = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await referenciasApi.getReferencias();
      
      if (response.success) {
        setReferencias(response.data);
      } else {
        setError('Error al cargar las referencias');
      }
    } catch (err) {
      console.error('Error fetching referencias:', err);
      setError('No se pudieron cargar las referencias. Verifica que el backend esté corriendo.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? referencias.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === referencias.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return dateString;
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Funciones para el modal de formulario
  const handleShowModal = () => {
    setShowModal(true);
    setFormErrors({});
    setFormSuccess('');
    // setCaptchaToken(''); // Temporalmente desactivado
    // setCaptchaError(''); // Temporalmente desactivado
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      nombre: '',
      titulo: '',
      correo: '',
      carta: ''
    });
    // setCaptchaToken(''); // Temporalmente desactivado
    // if (captchaRef.current) { // Temporalmente desactivado
    //   captchaRef.current.resetCaptcha();
    // }
  };

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

  // Manejar el captcha (TEMPORALMENTE DESACTIVADO)
  /*
  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
    setCaptchaError('');
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken('');
    setCaptchaError('El captcha ha expirado. Por favor, verifica nuevamente.');
  };

  const handleCaptchaError = (err) => {
    console.error('Captcha Error:', err);
    setCaptchaError('Error con la verificación. Intenta de nuevo.');
  };
  */

  const validateForm = () => {
    const errors = {};
    
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length < 2) {
      errors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (!formData.titulo.trim()) {
      errors.titulo = 'El título/área es requerido';
    }
    
    if (!formData.correo.trim()) {
      errors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      errors.correo = 'Por favor ingresa un correo válido';
    }
    
    if (!formData.carta.trim()) {
      errors.carta = 'La carta de recomendación es requerida';
    } else if (formData.carta.length < 50) {
      errors.carta = 'La carta debe tener al menos 50 caracteres';
    } else if (formData.carta.length > 1000) {
      errors.carta = 'La carta no puede exceder 1000 caracteres';
    }
    
    // TEMPORALMENTE DESACTIVADO
    // if (!captchaToken) {
    //   setCaptchaError('Por favor, completa la verificación captcha');
    // }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormErrors({});
    setFormSuccess('');
    // setCaptchaError(''); // Temporalmente desactivado
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormSubmitting(true);
    
    try {
      // Enviar datos al backend SIN captchaToken temporalmente
      const payload = {
        ...formData
        // captchaToken // Temporalmente desactivado
      };
      
      const response = await referenciasApi.createReferencia(payload);
      
      if (response.success) {
        setFormSuccess('¡Gracias! Tu recomendación ha sido enviada exitosamente.');
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          titulo: '',
          correo: '',
          carta: ''
        });
        
        // Resetear captcha - TEMPORALMENTE DESACTIVADO
        // if (captchaRef.current) {
        //   captchaRef.current.resetCaptcha();
        // }
        // setCaptchaToken('');
        
        // Recargar referencias después de 2 segundos
        setTimeout(() => {
          fetchReferencias();
          handleCloseModal();
        }, 2000);
        
      } else {
        setFormErrors({ submit: response.error || 'Error al enviar la recomendación' });
      }
    } catch (err) {
      console.error('Error al enviar referencia:', err);
      setFormErrors({ submit: 'Error al enviar la recomendación. Intenta de nuevo.' });
    } finally {
      setFormSubmitting(false);
    }
  };

  // Si hay datos de ejemplo, mostrar el botón para agregar más
  const showAddButton = referencias.length > 0;

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="py-5">
          <Spinner animation="border" style={{ color: 'var(--emerald)' }} />
          <p className="mt-3" style={{ color: 'var(--teal)' }}>
            Cargando referencias...
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
            <FaQuoteLeft />
          </div>
          <h2 className="mb-3" style={{ color: 'var(--emerald)' }}>Error al cargar</h2>
          <p className="lead" style={{ color: 'var(--teal)' }}>{error}</p>
          <Button 
            onClick={fetchReferencias} 
            className="btn-frutiger mt-3"
          >
            Reintentar
          </Button>
        </div>
      </Container>
    );
  }

  const currentReferencia = referencias[currentIndex];

  return (
    <Container className="py-5 fade-in">
      {/* Header con decoración y botón para agregar */}
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
            <FaQuoteLeft />
          </div>
        </div>
        <h1 className="display-4 fw-bold text-gradient mb-3">
          Referencias Profesionales
        </h1>
        <p className="lead fs-4" style={{ color: 'var(--teal)' }}>
          Lo que dicen colegas y superiores sobre mi trabajo
        </p>
        
        {/* Botón para agregar nueva referencia - SOLO si hay referencias existentes */}
        {showAddButton && (
          <div className="mt-4">
            <div className="glass-card p-4 d-inline-block" style={{ 
              borderRadius: '20px',
              maxWidth: '600px',
              background: 'rgba(255, 255, 255, 0.2)'
            }}>
              <h5 className="mb-3" style={{ color: 'var(--emerald)' }}>
                ¿Trabajaste conmigo y quieres recomendarme?
              </h5>
              <p className="mb-4" style={{ color: 'var(--teal)' }}>
                Tu opinión es valiosa para mi carrera profesional. Este segmento es solo para personas que me conocen en lo laboral y/o académico.
              </p>
              <Button 
                onClick={handleShowModal}
                className="btn-frutiger px-5 py-3"
                style={{
                  background: 'var(--gradient-emerald)',
                  fontSize: '1.1rem'
                }}
              >
                <FaPlus className="me-2" />
                Agregar Carta de Recomendación
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Si no hay referencias, mostrar mensaje especial y botón */}
      {referencias.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem', color: 'var(--aqua-green)' }}>
            <FaQuoteLeft />
          </div>
          <h2 className="mb-3" style={{ color: 'var(--emerald)' }}>Aún no hay referencias</h2>
          <p className="lead mb-4" style={{ color: 'var(--teal)', maxWidth: '600px', margin: '0 auto' }}>
            Sé el primero en compartir tu experiencia trabajando conmigo. 
            Tu recomendación será de gran ayuda para mi carrera profesional.
          </p>
          <Button 
            onClick={handleShowModal}
            className="btn-frutiger px-5 py-3 mt-3"
            style={{
              background: 'var(--gradient-emerald)',
              fontSize: '1.1rem'
            }}
          >
            <FaPlus className="me-2" />
            Ser el Primero en Recomendarme
          </Button>
        </div>
      ) : (
        <>
          {/* Estadísticas */}
          <Row className="mb-4">
            <Col md={3} sm={6} className="mb-3">
              <div className="glass-card p-3 text-center h-100">
                <div className="display-6 fw-bold text-gradient mb-2">
                  {referencias.length}
                </div>
                <div style={{ color: 'var(--teal)' }}>
                  Referencias
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <div className="glass-card p-3 text-center h-100">
                <div className="display-6 fw-bold text-gradient mb-2">
                  {currentIndex + 1}/{referencias.length}
                </div>
                <div style={{ color: 'var(--teal)' }}>
                  Actual
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <div className="glass-card p-3 text-center h-100">
                <div className="display-6 fw-bold text-gradient mb-2">
                  {autoPlay ? '▶️' : '⏸️'}
                </div>
                <div style={{ color: 'var(--teal)' }}>
                  {autoPlay ? 'Auto-play' : 'Pausado'}
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <div className="glass-card p-3 text-center h-100">
                <Button
                  onClick={toggleAutoPlay}
                  className="btn-frutiger-secondary w-100"
                >
                  {autoPlay ? (
                    <>
                      <FaPause className="me-2" />
                      Pausar
                    </>
                  ) : (
                    <>
                      <FaPlay className="me-2" />
                      Reproducir
                    </>
                  )}
                </Button>
              </div>
            </Col>
          </Row>

          {/* Carrusel Principal */}
          <div 
            className="position-relative mb-5"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Contenedor del carrusel */}
            <div className="glass-card border-0" style={{
              borderRadius: '25px',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 60px rgba(77, 255, 208, 0.25)',
              position: 'relative'
            }}>
              {/* Contenido de la referencia actual */}
              <div className="p-5">
                {/* Iconos de comillas decorativos */}
                <div className="position-absolute" style={{ top: '30px', left: '30px', opacity: 0.1 }}>
                  <FaQuoteLeft size={80} style={{ color: 'var(--emerald)' }} />
                </div>
                <div className="position-absolute" style={{ bottom: '30px', right: '30px', opacity: 0.1 }}>
                  <FaQuoteRight size={80} style={{ color: 'var(--aqua-green)' }} />
                </div>

                {/* Carta de recomendación */}
                <div className="text-center mb-4">
                  <div className="d-flex justify-content-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        className="mx-1"
                        style={{ 
                          color: i < 5 ? '#FFD700' : '#e4e5e9',
                          fontSize: '1.5rem',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                        }}
                      />
                    ))}
                  </div>
                  <p className="fs-4 fst-italic" style={{ 
                    color: 'var(--dark-color)',
                    lineHeight: '1.8',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    "{currentReferencia.carta}"
                  </p>
                </div>

                {/* Información de la persona */}
                <div className="glass-card p-4 mx-auto" style={{
                  maxWidth: '600px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)'
                }}>
                  <Row className="align-items-center">
                    <Col md={3} className="text-center mb-3 mb-md-0">
                      <div className="glass-card d-inline-flex p-3" style={{
                        borderRadius: '50%',
                        background: 'var(--gradient-aqua)',
                        width: '100px',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <FaUser size={40} style={{ color: 'white' }} />
                      </div>
                    </Col>
                    <Col md={9}>
                      <h3 className="fw-bold mb-2" style={{ color: 'var(--emerald)' }}>
                        {currentReferencia.nombre}
                      </h3>
                      <div className="d-flex flex-wrap gap-3 mb-3">
                        <Badge className="d-flex align-items-center px-3 py-2" style={{ 
                          background: 'var(--gradient-emerald)',
                          border: 'none',
                          borderRadius: '50px'
                        }}>
                          <FaBriefcase className="me-2" />
                          {currentReferencia.titulo}
                        </Badge>
                        <Badge className="d-flex align-items-center px-3 py-2" style={{ 
                          background: 'var(--gradient-ocean)',
                          border: 'none',
                          borderRadius: '50px'
                        }}>
                          <FaEnvelope className="me-2" />
                          {currentReferencia.correo}
                        </Badge>
                        {currentReferencia.fecha_formateada && (
                          <Badge className="d-flex align-items-center px-3 py-2" style={{ 
                            background: 'var(--gradient-aqua)',
                            border: 'none',
                            borderRadius: '50px'
                          }}>
                            <FaCalendarAlt className="me-2" />
                            {formatDate(currentReferencia.fecha_formateada)}
                          </Badge>
                        )}
                      </div>
                      <div className="mt-2">
                        <small className="text-muted">
                          Referencia #{currentReferencia.id} • {referencias.length} totales
                        </small>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Controles de navegación */}
              {referencias.length > 1 && (
                <>
                  {/* Flecha izquierda */}
                  <Button
                    onClick={handlePrev}
                    className="position-absolute top-50 start-0 translate-middle-y"
                    style={{
                      left: '20px',
                      background: 'var(--gradient-emerald)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                      zIndex: 10
                    }}
                  >
                    <FaChevronLeft size={24} style={{ color: 'white' }} />
                  </Button>

                  {/* Flecha derecha */}
                  <Button
                    onClick={handleNext}
                    className="position-absolute top-50 end-0 translate-middle-y"
                    style={{
                      right: '20px',
                      background: 'var(--gradient-emerald)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                      zIndex: 10
                    }}
                  >
                    <FaChevronRight size={24} style={{ color: 'white' }} />
                  </Button>
                </>
              )}
            </div>

            {/* Indicadores/puntos de navegación */}
            {referencias.length > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <div className="d-flex gap-2">
                  {referencias.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`border-0 rounded-circle ${index === currentIndex ? 'active-dot' : 'inactive-dot'}`}
                      style={{
                        width: index === currentIndex ? '20px' : '12px',
                        height: index === currentIndex ? '20px' : '12px',
                        background: index === currentIndex 
                          ? 'var(--gradient-emerald)' 
                          : 'rgba(168, 230, 207, 0.3)',
                        border: index === currentIndex 
                          ? '2px solid white' 
                          : '1px solid rgba(255, 255, 255, 0.5)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      aria-label={`Ir a referencia ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Miniaturas de todas las referencias */}
          {referencias.length > 1 && (
            <div className="mb-5">
              <h3 className="text-center mb-4" style={{ color: 'var(--teal)' }}>
                Todas las Referencias
              </h3>
              <Row className="g-3">
                {referencias.map((ref, index) => (
                  <Col key={ref.id} xs={6} md={4} lg={3}>
                    <div 
                      className={`glass-card p-3 cursor-pointer ${index === currentIndex ? 'active-thumbnail' : ''}`}
                      onClick={() => handleDotClick(index)}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        borderRadius: '15px',
                        border: index === currentIndex 
                          ? '2px solid var(--emerald)' 
                          : '1.5px solid rgba(255, 255, 255, 0.3)',
                        background: index === currentIndex 
                          ? 'rgba(168, 230, 207, 0.2)' 
                          : 'rgba(255, 255, 255, 0.15)',
                        transition: 'all 0.3s ease',
                        height: '100%'
                      }}
                    >
                      <div className="d-flex align-items-center mb-2">
                        <div className="me-2" style={{ 
                          width: '30px', 
                          height: '30px', 
                          borderRadius: '50%',
                          background: 'var(--gradient-aqua)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FaUser size={14} style={{ color: 'white' }} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0" style={{ 
                            color: index === currentIndex ? 'var(--emerald)' : 'var(--dark-color)',
                            fontSize: '0.9rem'
                          }}>
                            {ref.nombre}
                          </h6>
                          <small className="text-muted">{ref.titulo}</small>
                        </div>
                      </div>
                      <p className="text-muted small mb-0" style={{
                        fontSize: '0.8rem',
                        lineHeight: '1.4',
                        maxHeight: '3em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {truncateText(ref.carta, 80)}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {/* Nota sobre las referencias */}
          <Row className="mt-5">
            <Col lg={8} className="mx-auto">
              <div className="glass-card p-4 text-center" style={{ borderRadius: '20px' }}>
                <p className="mb-0" style={{ color: 'var(--teal)' }}>
                  <span className="fw-bold" style={{ color: 'var(--emerald)' }}>Nota:</span> 
                  {' '}Estas referencias son reales y obtenidas de profesionales con los que he trabajado. 
                  Puedes contactarlos para verificar mi desempeño profesional.
                </p>
              </div>
            </Col>
          </Row>
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

      {/* ========== MODAL PARA AGREGAR REFERENCIA ========== */}
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
            <FaPlus className="me-2" />
            Agregar Carta de Recomendación
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
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--teal)', fontWeight: '500' }}>
                    <FaUser className="me-2" />
                    Nombre Completo *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
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
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--teal)', fontWeight: '500' }}>
                    <FaBriefcase className="me-2" />
                    Título / Área *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleInputChange}
                    placeholder="Ej: Gerente, Colega, Cliente"
                    isInvalid={!!formErrors.titulo}
                    className="glass-input"
                    style={{
                      border: '1.5px solid rgba(255, 255, 255, 0.3)',
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'var(--dark-color)',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                  />
                  {formErrors.titulo && (
                    <Form.Control.Feedback type="invalid">
                      {formErrors.titulo}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'var(--teal)', fontWeight: '500' }}>
                <FaEnvelope className="me-2" />
                Correo Electrónico *
              </Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                placeholder="ejemplo@email.com"
                isInvalid={!!formErrors.correo}
                className="glass-input"
                style={{
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'var(--dark-color)',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              {formErrors.correo && (
                <Form.Control.Feedback type="invalid">
                  {formErrors.correo}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted">
                Tu correo no será publicado públicamente
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ color: 'var(--teal)', fontWeight: '500' }}>
                <FaQuoteLeft className="me-2" />
                Carta de Recomendación *
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="carta"
                value={formData.carta}
                onChange={handleInputChange}
                placeholder="Escribe tu recomendación aquí... (mínimo 50 caracteres)"
                isInvalid={!!formErrors.carta}
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
              {formErrors.carta && (
                <Form.Control.Feedback type="invalid">
                  {formErrors.carta}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted d-flex justify-content-between">
                <span>Mínimo 50 caracteres • Máximo 1000 caracteres</span>
                <span>{formData.carta.length}/1000</span>
              </Form.Text>
            </Form.Group>

            {/* Captcha - TEMPORALMENTE DESACTIVADO */}
            <div className="mb-4 p-3 glass-card" style={{ borderRadius: '12px', backgroundColor: 'rgba(168, 230, 207, 0.2)' }}>
              <div className="text-center">
                <FaLock className="text-success mb-2" size={24} />
                <p className="mb-0" style={{ color: 'var(--teal)' }}>
                  <strong>Verificación desactivada temporalmente</strong><br/>
                  <small>Para pruebas. Reactivar hCaptcha en producción.</small>
                </p>
              </div>
            </div>

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
                    Enviar Recomendación
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

export default References;