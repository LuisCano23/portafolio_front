import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaComments,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaUserCircle,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaLeaf,
  FaWater,
  FaTree,
  FaFish,
  FaSeedling
} from 'react-icons/fa';

import profileImage from '../sidebar/foto.jpeg'; // Cambia la ruta según tu estructura

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [expandedItems, setExpandedItems] = useState({});
  const [imageError, setImageError] = useState(false);
  
  const menuItems = [
    { 
      id: 'inicio',
      icon: <FaHome />, 
      label: 'Inicio', 
      path: '/inicio' 
    },
    { 
      id: 'habilidades',
      icon: <FaCode />, 
      label: 'Habilidades', 
      path: '/habilidades' 
    },
    { 
      id: 'experiencia',
      icon: <FaBriefcase />, 
      label: 'Experiencia Laboral',
      hasSubmenu: true,
      subItems: [
        { label: 'En informática', path: '/experiencia/informatica' },
        { label: 'En otras áreas', path: '/experiencia/otras-areas' }
      ]
    },
    { 
      id: 'trayectoria',
      icon: <FaGraduationCap />, 
      label: 'Trayectoria', 
      path: '/trayectoria' 
    },
    { 
      id: 'referencias',
      icon: <FaComments />, 
      label: 'Referencias', 
      path: '/referencias' 
    },
    { 
      id: 'comentarios',
      icon: <FaEnvelope />, 
      label: 'Comentarios', 
      path: '/comentarios' 
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSubmenu = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const sidebarWidth = isOpen ? '270px' : '80px';

  // Estilos del sidebar - CORREGIDOS
  const sidebarStyles = {
    width: sidebarWidth,
    height: 'calc(100vh - 80px)', // Cambiado de 90px a 80px
    top: '80px',
    left: isMobile ? (isOpen ? '15px' : '-100%') : '15px', // En móvil cerrado se oculta completamente
    zIndex: 1050,
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflowY: 'auto',
    overflowX: 'hidden', // IMPORTANTE: Previene scroll horizontal
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1.5px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 12px 40px rgba(77, 255, 208, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
    // Oculta scrollbar en navegadores que lo soporten
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--emerald) transparent'
  };

  // Cuando está cerrado en desktop, ocultamos el texto pero mantenemos los íconos
  const navLinkStyles = {
    color: 'var(--teal)',
    background: 'rgba(168, 230, 207, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap', // Previene que el texto se rompa
    overflow: 'hidden', // Oculta texto que se desborda
    textOverflow: 'ellipsis', // Añade puntos suspensivos si el texto es muy largo
    display: 'flex',
    alignItems: 'center',
    justifyContent: isOpen ? 'flex-start' : 'center', // Centra cuando está cerrado
    padding: isOpen ? '12px 16px' : '12px', // Ajusta padding cuando está cerrado
  };

  const navLinkHoverStyles = {
    background: 'rgba(168, 230, 207, 0.3)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(77, 255, 208, 0.2)'
  };

  return (
    <>
      {isOpen && isMobile && (
        <div 
          className="position-fixed"
          style={{
            top: '80px',
            left: '0',
            width: '100%',
            height: 'calc(100vh - 80px)',
            zIndex: 1040,
            background: 'rgba(168, 230, 207, 0.3)',
            backdropFilter: 'blur(5px)'
          }}
          onClick={closeSidebar}
        />
      )}

      <aside 
        className="position-fixed"
        style={sidebarStyles}
      >
        <div className="d-flex flex-column h-100" style={{ overflow: 'hidden' }}>
          {/* Header del sidebar */}
          <div className="p-4 text-center" style={{
            background: 'var(--gradient-glass)',
            borderRadius: '20px 20px 0 0',
            borderBottom: '1.5px solid rgba(255, 255, 255, 0.3)',
            minHeight: isOpen ? '180px' : '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="position-relative mb-3">
              {/* Contenedor de la imagen/ícono */}
              <div 
                className="glass-card d-inline-flex p-2" 
                style={{
                  borderRadius: '50%',
                  background: 'var(--gradient-aqua)',
                  width: isOpen ? '90px' : '60px',
                  height: isOpen ? '90px' : '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden', // Para que la imagen se ajuste al círculo
                  border: '3px solid white'
                }}
              >
                {/* Para usar una imagen en lugar del ícono:
                   1. Descomenta la siguiente línea y comenta la de FaUserCircle
                   2. Asegúrate de tener la imagen en la ruta correcta */}
                { <img 
                  src={profileImage || "https://via.placeholder.com/90"} 
                  alt="Perfil" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                  onError={() => setImageError(true)}
                /> }
                
                {/* Ícono de usuario por defecto 
                <FaUserCircle 
                  className={isOpen ? "fs-1" : "fs-4"} 
                  style={{ 
                    color: 'white',
                    width: '100%',
                    height: '100%',
                    padding: '8px'
                  }} 
                />*/}
              </div>
              
              {/* Botón de cerrar en móvil */}
              {isMobile && isOpen && (
                <button 
                  className="btn btn-sm position-absolute"
                  onClick={closeSidebar}
                  style={{
                    top: '0',
                    right: '0',
                    background: 'var(--gradient-emerald)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid white',
                    zIndex: 10
                  }}
                >
                  <FaTimes />
                </button>
              )}
            </div>
            
            {/* Título solo cuando está abierto */}
            {isOpen && (
              <div className="mt-2">
                <h5 className="fw-bold mb-1 text-gradient" style={{ fontSize: '1.1rem' }}>Menú de Navegación</h5>
                <small className="text-muted">Frutiger Aero Portfolio</small>
              </div>
            )}
          </div>
          
          {/* Navegación */}
          <Nav className="flex-column p-3 flex-grow-1" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
            {menuItems.map((item) => {
              if (item.hasSubmenu) {
                return (
                  <div key={item.id} className="mb-2">
                    <button
                      className="btn btn-link text-decoration-none w-100 text-start d-flex align-items-center justify-content-between p-3 rounded border-0"
                      onClick={() => toggleSubmenu(item.id)}
                      style={{ 
                        ...navLinkStyles,
                        background: 'rgba(168, 230, 207, 0.2)',
                        justifyContent: isOpen ? 'space-between' : 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(168, 230, 207, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(168, 230, 207, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div className="d-flex align-items-center" style={{ minWidth: '24px' }}>
                        <span style={{ fontSize: '1.2rem', minWidth: '24px' }}>
                          {item.icon}
                        </span>
                        {isOpen && <span className="fw-medium ms-3">{item.label}</span>}
                      </div>
                      {isOpen && (
                        <span style={{ color: 'var(--emerald)' }}>
                          {expandedItems[item.id] ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      )}
                    </button>
                    
                    {/* Submenú desplegable */}
                    {isOpen && expandedItems[item.id] && (
                      <div className="mt-2 ms-4 ps-3" style={{
                        borderLeft: '2px solid var(--aqua-green)',
                        borderRadius: '0 8px 8px 0'
                      }}>
                        {item.subItems.map((subItem, index) => (
                          <Nav.Item key={index} className="mb-2">
                            <Nav.Link
                              as={Link}
                              to={subItem.path}
                              className="py-2 px-3 rounded"
                              onClick={closeSidebar}
                              style={{ 
                                color: 'var(--teal)',
                                fontSize: '0.9rem',
                                background: 'rgba(255, 255, 255, 0.3)',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <span className="me-2" style={{ color: 'var(--emerald)' }}>•</span>
                              {subItem.label}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Nav.Item key={item.id} className="mb-2">
                  <Nav.Link
                    as={Link}
                    to={item.path}
                    className="rounded"
                    onClick={closeSidebar}
                    style={navLinkStyles}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, navLinkHoverStyles);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = navLinkStyles.background;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ 
                      fontSize: '1.2rem', 
                      minWidth: '24px',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </span>
                    {isOpen && <span className="fw-medium ms-3">{item.label}</span>}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
          
          {/* Sección de redes sociales y CV */}
          <div className="p-4" style={{
            borderTop: '1.5px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '0 0 20px 20px'
          }}>
            {/* Redes sociales */}
            <div className={`d-flex ${isOpen ? 'justify-content-around mb-4' : 'justify-content-center flex-column align-items-center gap-3'}`}>
              <a 
                href="https://github.com/LuisCano23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-card p-3 d-flex align-items-center justify-content-center"
                style={{ 
                  width: isOpen ? '50px' : '40px', 
                  height: isOpen ? '50px' : '40px',
                  borderRadius: '50%',
                  color: 'var(--emerald)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                title="GitHub"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.background = 'var(--gradient-aqua)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.color = 'var(--emerald)';
                }}
              >
                <FaGithub className={isOpen ? "fs-5" : "fs-6"} />
              </a>
              <a 
                href="https://www.linkedin.com/in/luis-cano-vicencio-1a6a20326/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-card p-3 d-flex align-items-center justify-content-center"
                style={{ 
                  width: isOpen ? '50px' : '40px', 
                  height: isOpen ? '50px' : '40px',
                  borderRadius: '50%',
                  color: 'var(--emerald)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                title="LinkedIn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.background = 'var(--gradient-aqua)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.color = 'var(--emerald)';
                }}
              >
                <FaLinkedin className={isOpen ? "fs-5" : "fs-6"} />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;