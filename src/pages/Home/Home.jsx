import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaBriefcase, 
  FaPhone, 
  FaLeaf, 
  FaWater, 
  FaCloud, 
  FaFish,
  FaTree
} from 'react-icons/fa';

const Home = () => {
  const featureCards = [
    {
      icon: <FaRocket />,
      title: 'Proyectos',
      description: 'Descubre mis proyectos más recientes y tecnologías utilizadas.',
      link: '/habilidades',
      color: 'var(--emerald)'
    },
    {
      icon: <FaBriefcase />,
      title: 'Experiencia',
      description: 'Conoce mi trayectoria profesional en el sector tecnológico.',
      link: '/experiencia',
      color: 'var(--teal)'
    },
    {
      icon: <FaPhone />,
      title: 'Contacto',
      description: 'Ponte en contacto para colaboraciones o oportunidades.',
      link: '/comentarios',
      color: 'var(--aqua-green)'
    }
  ];

  const natureElements = [
    <FaLeaf key="leaf" />,
    <FaWater key="water" />,
    <FaCloud key="cloud" />,
    <FaFish key="fish" />,
    <FaTree key="tree" />
  ];

  return (
    <Container className="py-5 fade-in">
      {/* Hero Section */}
      <div className="text-center mb-5 py-4">
        <div className="d-flex justify-content-center mb-3">
          {natureElements.map((icon, index) => (
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
        <div className="mb-4">
          <h1 className="display-4 fw-bold mb-3 text-gradient">
            Mi Portafolio Profesional
          </h1>
          <p className="lead fs-4" style={{ 
            color: 'var(--teal)',
            textShadow: '0 1px 2px rgba(255,255,255,0.5)'
          }}>
            Técnico en informática con mención en ciberseguridad.
          </p>
        </div>
      </div>

      {/* About Section */}
      <Row>
        <Col lg={8} className="mx-auto w-100">
          <Card className="glass-card border-0">
            <Card.Body className="p-5">
              <h3 className="text-info">Bienvenido/a!</h3>
              <p className="fs-5">
                Mi nombre es Luis Cano y soy titulado de la carrera de Técnico en Informática con mención en Ciberseguridad. Durante mi formación y en mis proyectos personales he desarrollado una sólida base en el desarrollo de aplicaciones web, área en la que destaco por mi aprendizaje rápido y mi capacidad para adaptarme a nuevos desafíos.
                Me considero una persona motivada, proactiva y con muchas ganas de seguir creciendo profesionalmente. Disfruto aprender nuevas tecnologías y trabajar en equipo, manteniendo siempre la responsabilidad y el compromiso como parte fundamental de mi manera de trabajar.
                Quedo totalmente disponible para ser considerado en cualquier oportunidad laboral donde pueda aportar con mis conocimientos, dedicación y entusiasmo. Si mi perfil es de su interés, los invito cordialmente a ponerse en contacto conmigo.
                Agradezco de antemano su tiempo y consideración.
                Este es mi portfolio profesional donde muestro mis habilidades, 
                proyectos y experiencia en el desarrollo de software con un estilo 
                <span className="fw-bold" style={{ color: 'var(--emerald)' }}> Frutiger Aero</span>.
              </p>
              <p className="text-muted fs-5 mb-4">
                Utiliza la barra lateral para navegar entre las diferentes secciones.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Floating Elements */}
      <div className="position-relative mt-5" style={{ height: '100px' }}>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="position-absolute float-animation"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              background: 'var(--gradient-aqua)',
              borderRadius: '50%',
              left: `${10 + i * 20}%`,
              top: `${Math.sin(i) * 30}px`,
              opacity: 0.3,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;