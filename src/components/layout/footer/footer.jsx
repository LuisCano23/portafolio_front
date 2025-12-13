import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaHeart, 
  FaRegCopyright, 
  FaEnvelope, 
  FaPhone, 
  FaLeaf, 
  FaWater, 
  FaTree, 
  FaFish, 
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const natureIcons = [
    <FaLeaf key="leaf" />,
    <FaWater key="water" />,
    <FaTree key="tree" />,
    <FaFish key="fish" />,
    <FaCloud key="cloud" />
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' }
  ];

  const quickLinks = [
    { label: 'Inicio', path: '/inicio' },
    { label: 'Habilidades', path: '/habilidades' },
    { label: 'Experiencia', path: '/experiencia' },
    { label: 'Trayectoria', path: '/trayectoria' },
    { label: 'Referencias', path: '/referencias' },
    { label: 'Comentarios', path: '/comentarios' }
  ];

  const technologies = [
    'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML5', 
    'CSS3', 'Bootstrap', 'Vite', 'Git', 'REST API', 'Frutiger Aero'
  ];

  return (
    <footer 
      className="mt-auto"
      style={{
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(15px)',
        borderTop: '1.5px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 -8px 32px rgba(77, 255, 208, 0.15)',
        marginTop: '30px'
      }}
    >
      <Container className="py-5">
        <Row className="gy-5">
          {/* Columna 1: Información del portfolio */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h4 className="fw-bold mb-3 text-gradient d-flex align-items-center">
                <FaLeaf className="me-2" />
                Mi Portfolio
              </h4>
            </div>
          </Col>
        </Row>

        {/* Copyright y créditos */}
        <Row className="mt-4">
          <Col md={6} className="text-center mb-3 mb-md-0">
            <div 
              className="d-flex align-items-center justify-content-center justify-content-md-start"
              style={{ color: 'var(--teal)' }}
            >
              <FaRegCopyright className="me-2" />
              <span>
                {currentYear} Mi Portafolio elaborado en React + Express, con base de datos en PostgreSQL.
              </span>
            </div>
          </Col>
          
        </Row>
      </Container>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .hover-effect:hover {
          color: var(--emerald) !important;
          text-shadow: 0 0 10px rgba(77, 255, 208, 0.5);
          transform: translateX(5px);
        }
        a:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(77, 255, 208, 0.3) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;