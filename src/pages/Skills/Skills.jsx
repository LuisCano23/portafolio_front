import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaLinux,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaHandsHelping,
  FaBrain,
  FaBalanceScale,
  FaChartLine,
  FaMedal,
  FaHeart,
  FaGlobe,
  FaBook,
  FaLeaf,
  FaWater,
  FaSeedling,
  FaCloud,
} from 'react-icons/fa';
import { SiFlask, SiDjango } from "react-icons/si";
import {
  SiPostgresql,
  SiExpress,
} from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB'},
    { name: 'Flask', icon: <SiFlask /> ,color: '#3776AB'},
    { name: 'Django', icon: <SiDjango /> ,color: '#19740dff'},
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E'},
    { name: 'React', icon: <FaReact />, color: '#61DAFB'},
    { name: 'Express', icon: <SiExpress />, color: '#000000'},
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791'},
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032'},
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 90 },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', level: 92 },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624', level: 70 },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717', level: 90 }
  ];

  const softSkills = [
    { 
      name: 'Trabajo en Equipo', 
      icon: <FaUsers />, 
      color: '#4ECDC4',
      description: 'Colaboración efectiva en equipos multidisciplinarios'
    },
    { 
      name: 'Comunicación', 
      icon: <FaComments />, 
      color: '#44A08D',
      description: 'Comunicación clara y asertiva'
    },
    { 
      name: 'Resolución de Problemas', 
      icon: <FaLightbulb />, 
      color: '#FFD166',
      description: 'Análisis y solución creativa de desafíos'
    },
    { 
      name: 'Gestión del Tiempo', 
      icon: <FaClock />, 
      color: '#0D9488',
      description: 'Priorización y organización eficiente'
    },
    { 
      name: 'Liderazgo', 
      icon: <FaHandsHelping />, 
      color: '#10B981',
      description: 'Guía y motivación de equipos'
    },
    { 
      name: 'Pensamiento Crítico', 
      icon: <FaBrain />, 
      color: '#7C3AED',
      description: 'Análisis profundo y toma de decisiones'
    },
    { 
      name: 'Adaptabilidad', 
      icon: <FaBalanceScale />, 
      color: '#F59E0B',
      description: 'Flexibilidad ante cambios y nuevos entornos'
    },
    { 
      name: 'Aprendizaje Continuo', 
      icon: <FaBook />, 
      color: '#3B82F6',
      description: 'Actualización constante de conocimientos'
    },
    { 
      name: 'Orientación a Resultados', 
      icon: <FaChartLine />, 
      color: '#10B981',
      description: 'Enfoque en objetivos y métricas'
    },
    { 
      name: 'Ética Profesional', 
      icon: <FaMedal />, 
      color: '#F59E0B',
      description: 'Integridad y responsabilidad en el trabajo'
    },
    { 
      name: 'Empatía', 
      icon: <FaHeart />, 
      color: '#EF4444',
      description: 'Comprensión de necesidades de usuarios y colegas'
    },
    { 
      name: 'Pensamiento Global', 
      icon: <FaGlobe />, 
      color: '#3B82F6',
      description: 'Visión amplia y consideración de contextos diversos'
    }
  ];

  // Decoraciones flotantes
  const decorations = [
    <FaLeaf key="leaf" />,
    <FaWater key="water" />,
    <FaSeedling key="seedling" />,
    <FaCloud key="cloud" />
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
          Mis Habilidades
        </h1>
        <p className="lead fs-4" style={{ color: 'var(--teal)' }}>
          Conjunto de competencias técnicas y profesionales
        </p>
      </div>

      {/* Sección de Habilidades Técnicas */}
      <Row className="mb-5">
        <Col lg={12}>
          <Card className="glass-card border-0 mb-4">
            <Card.Header className="border-0" style={{
              background: 'var(--gradient-glass)',
              borderRadius: '20px 20px 0 0',
              padding: '1.5rem'
            }}>
              <div className="d-flex align-items-center">
                <div className="me-3" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--gradient-aqua)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  
                </div>
                <div>
                  <h2 className="mb-0 fw-bold" style={{ color: 'var(--emerald)' }}>
                    Habilidades Técnicas
                  </h2>
                  <p className="mb-0" style={{ color: 'var(--teal)' }}>
                    Tecnologías y herramientas que domino
                  </p>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-4">
              <Row className="g-4">
                {technicalSkills.map((skill, index) => (
                  <Col key={index} xs={6} sm={4} md={3} lg={2}>
                    <div className="glass-card p-3 text-center h-100 d-flex flex-column align-items-center justify-content-center"
                      style={{
                        borderRadius: '16px',
                        border: '1.5px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(77, 255, 208, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div 
                        className="mb-2 p-2 rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          fontSize: '2.5rem',
                          color: skill.color,
                          background: 'rgba(255, 255, 255, 0.2)',
                          width: '70px',
                          height: '70px',
                          border: `2px solid ${skill.color}40`
                        }}
                      >
                        {skill.icon}
                      </div>
                      <h6 className="fw-bold mb-1" style={{ color: 'var(--dark-color)' }}>
                        {skill.name}
                      </h6>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección de Habilidades Blandas */}
      <Row>
        <Col lg={12}>
          <Card className="glass-card border-0">
            <Card.Header className="border-0" style={{
              background: 'var(--gradient-glass)',
              borderRadius: '20px 20px 0 0',
              padding: '1.5rem'
            }}>
              <div className="d-flex align-items-center">
                <div className="me-3" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--gradient-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  <FaUsers />
                </div>
                <div>
                  <h2 className="mb-0 fw-bold" style={{ color: 'var(--emerald)' }}>
                    Habilidades Blandas
                  </h2>
                  <p className="mb-0" style={{ color: 'var(--teal)' }}>
                    Competencias interpersonales y profesionales
                  </p>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-4">
              <Row className="g-4">
                {softSkills.map((skill, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <div className="glass-card p-4 h-100"
                      style={{
                        borderRadius: '16px',
                        border: '1.5px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(77, 255, 208, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div className="d-flex align-items-start">
                        <div 
                          className="me-3 p-2 rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            fontSize: '1.8rem',
                            color: skill.color,
                            background: `${skill.color}20`,
                            width: '60px',
                            height: '60px',
                            flexShrink: 0
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2" style={{ color: 'var(--dark-color)' }}>
                            {skill.name}
                          </h5>
                          <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Nota final */}
      <Row className="mt-5">
        <Col lg={8} className="mx-auto">
          <div className="glass-card p-4 text-center" style={{ borderRadius: '20px' }}>
            <p className="mb-0" style={{ color: 'var(--teal)' }}>
              <span className="fw-bold" style={{ color: 'var(--emerald)' }}>Importante:</span> 
              {' '}Estas habilidades están en constante evolución. Me mantengo actualizado con las últimas 
              tecnologías y metodologías para ofrecer soluciones innovadoras y efectivas.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;