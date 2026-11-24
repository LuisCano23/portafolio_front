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
    <Container className="py-5 fade-in trajectory-page">
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center mb-3" aria-hidden="true">
          {decorations.map((icon, index) => <div key={index} className="float-animation">{icon}</div>)}
        </div>
        <h1 className="display-5 fw-bold mb-3">Mi Trayectoria</h1>
        <p className="lead" style={{ color: 'var(--teal)' }}>Línea de tiempo de mi desarrollo académico y profesional</p>
      </div>
      <div className="career-timeline">
        {timelineEvents.map((event) => (
          <article className="career-event" key={event.id}>
            <div className="career-date"><strong>{event.year}</strong><span>{event.month}</span></div>
            <span className="career-point" aria-hidden="true">{event.icon}</span>
            <div className="career-card glass-card">
              <h2>{event.title}</h2>
              <p className="career-subtitle">{event.subtitle}</p>
              <p className="career-description">{event.description}</p>
                <div className="career-achievements" id={`event-${event.id}`} hidden={expandedEvent !== event.id}>
                  <h3><FaStar aria-hidden="true" /> Logros y reconocimientos</h3>
                  <ul>{event.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
                </div>
              <div className="career-card-footer">
                <span><FaRegCalendarCheck aria-hidden="true" /> Completado</span>
                <button className="career-expand" onClick={() => toggleEvent(event.id)} aria-expanded={expandedEvent === event.id} aria-controls={`event-${event.id}`}>
                  {expandedEvent === event.id ? 'Ver menos' : 'Ver más'}
                  {expandedEvent === event.id ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <aside className="career-note glass-card">
        <h2><FaLightbulb aria-hidden="true" /> Nota sobre confidencialidad</h2>
        <p>El proyecto de título mencionado está sujeto a acuerdos de confidencialidad y propiedad intelectual. Los detalles técnicos específicos no pueden ser divulgados públicamente, pero puedo discutir las tecnologías generales y enfoques metodológicos utilizados en entrevistas profesionales.</p>
      </aside>
    </Container>
  );
};

export default Trajectory;
