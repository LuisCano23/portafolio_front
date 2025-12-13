import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {
  FaGraduationCap,
  FaTrophy,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
  FaUserGraduate,
  FaCalendarAlt,
  FaStar,
  FaAward,
  FaRocket,
  FaLightbulb,
  FaLeaf,
  FaWater,
  FaSeedling,
  FaCloud,
  FaFish,
  FaTree,
  FaChevronDown,
  FaChevronUp,
  FaRegCalendarCheck
} from 'react-icons/fa';

const Trajectory = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  // Eventos de la línea de tiempo
  const timelineEvents = [
    {
      id: 1,
      year: '2025',
      month: 'Julio',
      title: 'Proyecto de Título',
      subtitle: 'Evaluación con Nota Máxima',
      description: 'Presenté mi proyecto de título (el cual manejo en confidencialidad por acuerdos de no divulgación) ante el tribunal evaluador, obteniendo la calificación máxima y reconocimientos especiales por la innovación y calidad técnica del trabajo.',
      longDescription: 'El proyecto consistió en el desarrollo de una solución integral que combina tecnologías modernas de desarrollo web con algoritmos de inteligencia artificial. La implementación demostró no solo competencias técnicas avanzadas, sino también habilidades de investigación, documentación y presentación efectiva.',
      icon: <FaProjectDiagram />,
      color: '#4ECDC4',
      status: 'completado',
      achievements: [
        'Calificación máxima (7.0)',
        'Reconocimiento por innovación',
        'Mención especial del tribunal'
      ]
    },
    {
      id: 2,
      year: '2025',
      month: 'Enero - Abril',
      title: 'Práctica Laboral',
      subtitle: 'Evaluación con Nota Máxima',
      description: 'Realicé mi práctica laboral en una empresa del sector tecnológico, donde fui evaluado con la máxima calificación por mi desempeño, compromiso y contribución a los proyectos asignados.',
      longDescription: 'Durante la práctica, participé activamente en el desarrollo de aplicaciones web utilizando React y Node.js, colaboré en el diseño de bases de datos, implementé características siguiendo metodologías ágiles y trabajé en equipo con profesionales experimentados. Mi evaluación destacó mi rápida adaptación, capacidad de aprendizaje y contribución significativa a los proyectos.',
      icon: <FaBriefcase />,
      color: '#44A08D',
      status: 'completado',
      tags: ['Práctica Profesional', 'Desarrollo Web', 'Trabajo en Equipo', 'Metodologías Ágiles'],
      achievements: [
        'Evaluación máxima (7.0)',
        'Recomendación del supervisor',
        'Propuesta de continuidad'
      ]
    },
    {
      id: 3,
      year: '2024',
      month: 'Diciembre',
      title: 'Premio a la Trayectoria',
      subtitle: 'Mejor de mi Generación',
      description: 'Fui reconocido como el mejor estudiante de mi generación, recibiendo el "Premio a la Trayectoria" por excelencia académica, participación en actividades extracurriculares y distinción dentro de la comunidad estudiantil.',
      longDescription: 'Este reconocimiento se otorga al estudiante que demuestra no solo excelencia académica, sino también liderazgo, participación en actividades de extensión y contribución al desarrollo de sus compañeros. El premio incluyó una distinción especial en la ceremonia de fin de año y una beca para continuar estudios de especialización.',
      icon: <FaTrophy />,
      color: '#FFD166',
      status: 'completado',
      tags: ['Excelencia Académica', 'Liderazgo', 'Reconocimiento', 'Distinción'],
      achievements: [
        'Primer lugar de generación',
        'Reconocimiento público'
      ]
    },
    {
      id: 4,
      year: '2023',
      month: 'Marzo',
      title: 'Inicio de Carrera',
      subtitle: 'Técnico en Informática',
      description: 'Comienzo formal de mis estudios en la carrera de Técnico en Informática, marcando el inicio de mi formación especializada en desarrollo de software y tecnologías de la información.',
      longDescription: 'El programa de estudios abarcó fundamentos de programación, bases de datos, desarrollo web, redes y sistemas operativos. Desde el inicio mostré gran interés y aptitud para las tecnologías de desarrollo, destacándome en proyectos prácticos y trabajos colaborativos.',
      icon: <FaGraduationCap />,
      color: '#0D9488',
      status: 'completado',
      tags: ['Formación Inicial', 'Fundamentos', 'Programación', 'Tecnologías'],
      achievements: [
        'Promedio sobresaliente',
        'Proyectos destacados',
        'Recomendación docente'
      ]
    }
  ];

  const decorations = [
    <FaLeaf key="leaf" />,
    <FaWater key="water" />,
    <FaSeedling key="seedling" />,
    <FaCloud key="cloud" />,
    <FaFish key="fish" />,
    <FaTree key="tree" />
  ];

  const toggleEvent = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <Container className="py-5 fade-in">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center mb-3">
          {decorations.map((icon, index) => (
            <div 
              key={index} 
              className="mx-1 mx-sm-2 float-animation"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                color: 'var(--emerald)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        <h1 className="display-5 fw-bold text-gradient mb-3">
          Mi Trayectoria
        </h1>
        <p className="lead fs-5" style={{ color: 'var(--teal)' }}>
          Línea de tiempo de mi desarrollo académico y profesional
        </p>
      </div>

      {/* Línea de tiempo RESPONSIVA */}
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <div className="position-relative">
            {/* Línea vertical - visible solo en pantallas grandes */}
            <div className="d-none d-lg-block position-absolute start-50 translate-middle-x"
              style={{
                width: '4px',
                height: '100%',
                background: 'var(--gradient-aqua)',
                borderRadius: '10px',
                zIndex: 1
              }}
            />
            
            {/* Línea vertical para móviles */}
            <div className="d-lg-none position-absolute"
              style={{
                width: '4px',
                height: '100%',
                background: 'var(--gradient-aqua)',
                borderRadius: '10px',
                zIndex: 1,
                left: '24px'
              }}
            />
            
            {/* Eventos */}
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id}
                className="position-relative mb-4 mb-md-5"
                style={{ 
                  zIndex: 2,
                  // En móvil todos los eventos van a la derecha de la línea
                  marginLeft: window.innerWidth < 992 ? '48px' : (index % 2 === 0 ? '0' : 'auto'),
                  marginRight: window.innerWidth < 992 ? '0' : (index % 2 === 0 ? 'auto' : '0'),
                  // Ancho responsivo
                  width: window.innerWidth < 992 ? 'calc(100% - 60px)' : 'calc(50% - 30px)'
                }}
              >
                {/* Punto en la línea */}
                <div 
                  className="position-absolute top-0"
                  style={{
                    left: window.innerWidth < 992 ? '-48px' : (index % 2 === 0 ? '100%' : '-18px'),
                    transform: 'translateX(-50%)',
                    width: 'clamp(36px, 5vw, 40px)',
                    height: 'clamp(36px, 5vw, 40px)',
                    borderRadius: '50%',
                    background: 'var(--gradient-emerald)',
                    border: '3px solid white',
                    boxShadow: '0 4px 20px rgba(77, 255, 208, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    zIndex: 3
                  }}
                >
                  {event.icon}
                </div>

                {/* Card del evento */}
                <Card 
                  className={`glass-card border-0 ${index % 2 === 0 && window.innerWidth >= 992 ? 'me-lg-3' : 'ms-lg-3'}`}
                  style={{
                    borderRadius: '16px',
                    borderLeft: window.innerWidth < 992 || index % 2 !== 0 ? `4px solid ${event.color}` : 'none',
                    borderRight: window.innerWidth < 992 || index % 2 === 0 ? 'none' : `4px solid ${event.color}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden'
                  }}
                  onClick={() => toggleEvent(event.id)}
                >
                  <Card.Body className="p-3 p-md-4">
                    {/* Header del evento */}
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-3">
                      <div className="w-100">
                        <div className="d-flex align-items-center mb-2 flex-wrap">
                          <FaCalendarAlt className="me-2" style={{ color: event.color, fontSize: '0.9rem' }} />
                          <span className="fw-bold fs-6" style={{ color: event.color }}>
                            {event.year}
                          </span>
                          <span className="ms-2 text-muted fs-6">{event.month}</span>
                        </div>
                        <h3 className="fw-bold mb-1 fs-5 fs-md-4" style={{ color: 'var(--dark-color)' }}>
                          {event.title}
                        </h3>
                        <h5 className="mb-3 fs-6 fs-md-5" style={{ color: 'var(--teal)' }}>
                          {event.subtitle}
                        </h5>
                      </div>
                      <div className="d-flex align-items-center mt-2 mt-sm-0">
                        {event.status === 'futuro' ? (
                          <Badge className="px-2 px-sm-3 py-1 py-sm-2" style={{ 
                            background: 'var(--gradient-ocean)',
                            border: 'none',
                            fontSize: '0.75rem'
                          }}>
                            Próximamente
                          </Badge>
                        ) : (
                          <Badge className="px-2 px-sm-3 py-1 py-sm-2" style={{ 
                            background: 'var(--gradient-emerald)',
                            border: 'none',
                            fontSize: '0.75rem'
                          }}>
                            Completado
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-muted mb-4 fs-6" style={{ lineHeight: '1.6' }}>
                      {event.description}
                    </p>

                    {/* Información expandida */}
                    {expandedEvent === event.id && (
                      <div className="mt-4 pt-4 border-top">
                        {/* Logros */}
                        <div className="mb-4">
                          <h5 className="fw-bold mb-3 d-flex align-items-center fs-6" style={{ color: event.color }}>
                            <FaStar className="me-2" />
                            Logros y Reconocimientos
                          </h5>
                          <ul className="list-unstyled">
                            {event.achievements.map((achievement, idx) => (
                              <li key={idx} className="mb-2 d-flex align-items-start">
                                <div className="me-2 mt-1" style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  background: event.color,
                                  flexShrink: 0
                                }} />
                                <span className="fs-6">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Botón para expandir/contraer */}
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="d-flex flex-wrap gap-2">
                        {event.status === 'completado' && (
                          <span className="d-flex align-items-center text-success fs-6">
                            <FaCertificate className="me-1" />
                            Certificado
                          </span>
                        )}
                      </div>
                      <button 
                        className="btn btn-sm border-0 bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleEvent(event.id);
                        }}
                        style={{ color: event.color, fontSize: '0.9rem' }}
                      >
                        {expandedEvent === event.id ? (
                          <>
                            <FaChevronUp className="me-1" />
                            Ver menos
                          </>
                        ) : (
                          <>
                            <FaChevronDown className="me-1" />
                            Ver más
                          </>
                        )}
                      </button>
                    </div>
                  </Card.Body>
                </Card>

                {/* Flecha decorativa (solo en desktop) */}
                {index < timelineEvents.length - 1 && window.innerWidth >= 992 && (
                  <div 
                    className="position-absolute d-none d-lg-block"
                    style={{
                      left: index % 2 === 0 ? '100%' : '-15px',
                      bottom: '-30px',
                      width: '0',
                      height: '0',
                      borderLeft: '15px solid transparent',
                      borderRight: '15px solid transparent',
                      borderTop: `15px solid ${event.color}40`,
                      transform: index % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Nota sobre confidencialidad */}
      <Row className="mt-4">
        <Col xs={12} lg={8} className="mx-auto">
          <div className="glass-card p-3 p-md-4" style={{ 
            borderRadius: '16px',
            background: 'rgba(77, 255, 208, 0.1)',
            border: '1px solid rgba(77, 255, 208, 0.3)'
          }}>
            <div className="d-flex align-items-start">
              <FaLightbulb className="me-3 mt-1 flex-shrink-0" style={{ color: 'var(--emerald)' }} />
              <div>
                <h5 className="fw-bold mb-2 fs-6" style={{ color: 'var(--emerald)' }}>
                  Nota sobre Confidencialidad
                </h5>
                <p className="mb-0 text-muted fs-6">
                  El proyecto de título mencionado está sujeto a acuerdos de confidencialidad y 
                  propiedad intelectual. Los detalles técnicos específicos no pueden ser divulgados 
                  públicamente, pero puedo discutir las tecnologías generales y enfoques metodológicos 
                  utilizados en entrevistas profesionales.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Elementos decorativos flotantes */}
      <div className="position-relative mt-5 d-none d-md-block" style={{ height: '60px' }}>
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="position-absolute float-animation"
            style={{
              width: `${10 + i * 6}px`,
              height: `${10 + i * 6}px`,
              background: i % 2 === 0 ? 'var(--gradient-aqua)' : 'var(--gradient-emerald)',
              borderRadius: '50%',
              left: `${i * 16}%`,
              top: `${Math.sin(i) * 20}px`,
              opacity: 0.3,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '5s'
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Trajectory;