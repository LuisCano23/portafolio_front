import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaCodeBranch,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaLeaf,
  FaWater,
  FaSeedling,
  FaCloudRain
} from 'react-icons/fa';

const ITExperience = () => {
  // Datos de experiencia en TI
  const experiences = [
    {
      id: 1,
      empresa: 'Net-works',
      web: 'https://net-works.cl/',
      cargo: 'Practicante',
      periodo: 'Enero 2025 - Abril 2025',
      ubicacion: 'Viña del Mar, Chile (Remoto)',
      descripcion: 'Apoyo en la creación e implementación de funciones en un proyecto que simula los daños de desastres naturales usando inteligencia artificial. Participación en desarrollo front-end y back-end, manejo de formularios y lectura de base de datos.',
      tecnologias: ['Flask', 'Python', 'SQLite', 'Jinja', 'Networkx', 'API', 'Bootsrap'],
      logoColor: 'var(--emerald)'
    }
  ];

  // Iconos de decoración
  const decorations = [
    <FaLeaf key="leaf" />,
    <FaWater key="water" />,
    <FaSeedling key="seedling" />,
    <FaCloudRain key="cloud-rain" />
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
          Experiencia en Informática
        </h1>
      </div>

      {/* Línea de tiempo de experiencia */}
      <div className="position-relative">

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
              tipo="it"
              logoColor={exp.logoColor}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ITExperience;