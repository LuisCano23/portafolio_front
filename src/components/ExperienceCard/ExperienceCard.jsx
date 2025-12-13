import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { 
  FaCalendar, 
  FaMapMarkerAlt, 
  FaBuilding,
  FaChevronRight,
  FaLeaf,
  FaWater
} from 'react-icons/fa';

const ExperienceCard = ({ 
  empresa, 
  cargo,
  web, 
  periodo, 
  ubicacion, 
  descripcion, 
  tecnologias = [], 
  tipo = 'it', // 'it' o 'other'
  logoColor = 'var(--emerald)'
}) => {
  const isIt = tipo === 'it';
  
  return (
    <div className="position-relative mb-4">
      {/* Línea vertical de la línea de tiempo */}
      <div className="position-absolute start-0 top-0 bottom-0" 
        style={{ 
          width: '3px',
          background: 'var(--gradient-aqua)',
          left: '25px',
          zIndex: 1
        }}
      />
      
      {/* Punto decorativo */}
      <div className="position-absolute" 
        style={{ 
          left: '18px',
          top: '20px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: logoColor,
          border: '3px solid white',
          zIndex: 2,
          boxShadow: '0 0 0 3px rgba(77, 255, 208, 0.3)'
        }}
      />
      
      <Card className="glass-card border-0 ms-5" style={{ borderRadius: '20px' }}>
        <Card.Body className="p-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
            <div className="mb-3 mb-md-0">
              <div className="d-flex align-items-center mb-2">
                <div className="me-3" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: logoColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  boxShadow: `0 4px 15px ${logoColor}40`
                }}>
                  <FaBuilding />
                </div>
                <div>
                  <h3 className="fw-bold mb-0" style={{ color: 'var(--dark-color)' }}>
                    {cargo}
                  </h3>
                  <div className="d-flex align-items-center mt-1">
                    <FaChevronRight className="me-1" style={{ 
                      fontSize: '0.8rem', 
                      color: logoColor 
                    }} />
                    <div className="d-grid">
                      <span className="fw-medium" style={{ color: logoColor }}>
                        {empresa}
                      </span>
                      <span className="fw-medium" style={{ color: logoColor }}>
                        Web: <a href={web}>{web}</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-md-end">
              <div className="glass-card d-inline-flex align-items-center px-3 py-2 mb-2" 
                style={{ borderRadius: '50px' }}>
                <FaCalendar className="me-2" style={{ color: logoColor }} />
                <span className="fw-medium" style={{ color: 'var(--teal)' }}>
                  {periodo}
                </span>
              </div>
              
              {ubicacion && (
                <div className="d-flex align-items-center justify-content-end">
                  <FaMapMarkerAlt className="me-1" style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--aqua-green)' 
                  }} />
                  <small style={{ color: 'var(--teal)' }}>
                    {ubicacion}
                  </small>
                </div>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
              {descripcion}
            </p>
          </div>
          
          {tecnologias.length > 0 && (
            <div>
              <h6 className="fw-bold mb-2" style={{ color: 'var(--teal)' }}>
                {isIt ? 'Tecnologías utilizadas:' : 'Habilidades aplicadas:'}
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {tecnologias.map((tech, index) => (
                  <Badge 
                    key={index}
                    className="px-3 py-2 d-flex align-items-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.3)',
                      border: `1px solid ${logoColor}40`,
                      color: 'white',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    {isIt ? (
                      <span className="me-1" style={{ fontSize: '0.9rem' }}>⚙️</span>
                    ) : (
                      <span className="me-1" style={{ fontSize: '0.9rem' }}>✨</span>
                    )}
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* Elementos decorativos */}
          <div className="position-absolute" style={{ top: '15px', right: '15px' }}>
            <div className="d-flex">
              <FaLeaf style={{ 
                color: 'var(--emerald)', 
                opacity: 0.3,
                marginRight: '5px'
              }} />
              <FaWater style={{ 
                color: 'var(--aqua-green)', 
                opacity: 0.3 
              }} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExperienceCard;