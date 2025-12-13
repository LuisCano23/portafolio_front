import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import { 
  FaUsers, 
  FaHandshake, 
  FaChartBar, 
  FaGraduationCap,
  FaStore,
  FaHeadset,
  FaLightbulb,
  FaLeaf,
  FaWater,
  FaTree,
  FaMountain
} from 'react-icons/fa';

const OtherExperience = () => {
  // Datos de experiencia en otras áreas
  const experiences = [
    {
      id: 1,
      empresa: 'Family shop',
      web:'https://familyshop.cl/',
      cargo: 'Cajero - Apoyo Fiscal',
      periodo: 'Agosto 2021 - Noviembre 2022',
      ubicacion: 'Valparaíso, Chile',
      descripcion: 'Atención personalizada a clientes y gestión de caja. Control de inventario, apertura y cierre de caja. Apoyo en gestiones contables relacionadas con la administración.',
      logoColor: 'var(--emerald)'
    }    
  ];

  // Iconos de decoración
  const decorations = [
    <FaLeaf key="leaf" />,
    <FaWater key="water" />,
    <FaTree key="tree" />,
    <FaMountain key="mountain" />
  ];

  return (
    <Container className="py-5 fade-in">
      {/* Header con decoración */}
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center mb-3">
          {decorations.map((icon, index) => (
            <div 
              key={index} 
              className="mx-2 float-animation"
              style={{ 
                animationDelay: `${index * 0.3}s`,
                fontSize: '2rem',
                color: 'var(--emerald)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        <h1 className="display-4 fw-bold text-gradient mb-3">
          Experiencia en Otras Áreas
        </h1>
        <p className="lead fs-4" style={{ color: 'var(--teal)' }}>
          Mi experiencia complementaria fuera del sector tecnológico
        </p>
      </div>

      {/* Introducción */}
      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <Card className="glass-card border-0 text-center" style={{ borderRadius: '20px' }}>
            <Card.Body className="p-4">
              <p className="fs-5 mb-0" style={{ color: 'var(--teal)' }}>
                Estas experiencias han desarrollado habilidades transferibles que enriquecen mi perfil como 
                profesional tecnológico, aportando perspectiva empresarial, capacidad de liderazgo y 
                comprensión de diferentes contextos organizacionales.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Línea de tiempo de experiencia */}
      <div className="position-relative">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3" style={{ color: 'var(--emerald)' }}>
            <FaChartBar className="me-2" />
            Experiencia Diversificada
          </h2>
          <p className="text-muted mb-0" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Mi recorrido en diferentes sectores, desarrollando habilidades complementarias
          </p>
        </div>

        {/* Experiencias ordenadas cronológicamente */}
        <div className="mt-5">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              empresa={exp.empresa}
              web={exp.web}
              cargo={exp.cargo}
              periodo={exp.periodo}
              ubicacion={exp.ubicacion}
              descripcion={exp.descripcion}
              tecnologias={exp.tecnologias}
              tipo="other"
              logoColor={exp.logoColor}
            />
          ))}
        </div>
      </div>

      {/* Valor añadido */}
      <Row className="mt-5">
        <Col lg={12}>
          <Card className="glass-card border-0" style={{ borderRadius: '20px' }}>
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-3 text-center" style={{ color: 'var(--emerald)' }}>
                ¿Cómo esta experiencia complementa mi perfil tecnológico?
              </h4>
              <Row className="g-4">
                <Col md={4}>
                  <div className="text-center p-3">
                    <div className="display-4 mb-3" style={{ color: 'var(--teal)' }}>💡</div>
                    <h5 className="fw-bold mb-2" style={{ color: 'var(--dark-color)' }}>
                      Perspectiva Empresarial
                    </h5>
                    <p className="text-muted small mb-0">
                      Entiendo las necesidades del negocio más allá del código
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center p-3">
                    <div className="display-4 mb-3" style={{ color: 'var(--aqua-green)' }}>🤝</div>
                    <h5 className="fw-bold mb-2" style={{ color: 'var(--dark-color)' }}>
                      Comunicación Efectiva
                    </h5>
                    <p className="text-muted small mb-0">
                      Me comunico claramente con stakeholders técnicos y no técnicos
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center p-3">
                    <div className="display-4 mb-3" style={{ color: 'var(--sky-blue)' }}>🎯</div>
                    <h5 className="fw-bold mb-2" style={{ color: 'var(--dark-color)' }}>
                      Enfoque al Cliente
                    </h5>
                    <p className="text-muted small mb-0">
                      Desarrollo soluciones que realmente resuelven problemas del usuario
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OtherExperience;