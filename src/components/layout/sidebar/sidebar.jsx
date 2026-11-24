import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaQuoteLeft, FaRegCommentDots, FaGithub, FaLinkedinIn, FaChevronDown, FaTimes, FaLeaf } from 'react-icons/fa';
import profileImage from './foto.jpeg';

const menuItems = [
  { path: '/inicio', label: 'Inicio', icon: FaHome },
  { path: '/habilidades', label: 'Habilidades', icon: FaCode },
  { path: '/experiencia', label: 'Experiencia laboral', icon: FaBriefcase },
  { path: '/trayectoria', label: 'Trayectoria', icon: FaGraduationCap },
  { path: '/referencias', label: 'Referencias', icon: FaQuoteLeft },
  { path: '/comentarios', label: 'Comentarios', icon: FaRegCommentDots },
];

const Sidebar = ({ isOpen, isMobile, closeSidebar }) => {
  const { pathname } = useLocation();
  const [showExperience, setShowExperience] = useState(false);
  const sidebarRef = useRef(null);
  const mobileOpen = isMobile && isOpen;

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    sidebarRef.current?.querySelector('button, a')?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') document.getElementById('navigation-toggle')?.click();
      if (event.key !== 'Tab') return;
      const controls = [...sidebarRef.current.querySelectorAll('a, button')].filter((item) => item.getClientRects().length);
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      document.getElementById('navigation-toggle')?.focus();
    };
  }, [mobileOpen]);

  const experienceExpanded = showExperience;

  return (
    <>
      {mobileOpen && <div className="sidebar-backdrop" onClick={closeSidebar} aria-hidden="true" />}
      <aside id="portfolio-navigation" className={`site-sidebar glass-panel ${isOpen ? 'is-open' : ''}`}
        ref={sidebarRef} role={mobileOpen ? 'dialog' : undefined} aria-modal={mobileOpen || undefined}
        aria-label="Menú de navegación" inert={isMobile && !isOpen}>
        <button className="sidebar-close icon-button" onClick={closeSidebar} aria-label="Cerrar menú"><FaTimes /></button>
        <Link to="/inicio" onClick={closeSidebar} className="sidebar-profile" aria-label="Luis Cano, ir al inicio">
          <span className="portrait-frame"><img src={profileImage} alt="Luis Cano" width="80" height="80" /></span>
          <span className="sidebar-label profile-name">Luis Alberto<span>Cano Vicencio</span></span>
          <span className="sidebar-label profile-role">Técnico en informática<br />Mención en ciberseguridad</span>
        </Link>
        <p className="nav-caption sidebar-label">EXPLORA MI PORTAFOLIO</p>
        <nav className="sidebar-nav" aria-label="Secciones del portafolio">
          {menuItems.map(({ path, label, icon: Icon }) => (
            <div key={path}>
              <div className="navigation-row">
                <NavLink to={path} onClick={closeSidebar} title={!isOpen ? label : undefined}
                  aria-label={!isOpen ? label : undefined}
                  className={({ isActive }) => `navigation-link ${isActive || (path === '/inicio' && pathname === '/') ? 'is-active' : ''}`}>
                  <span className="navigation-icon"><Icon aria-hidden="true" /></span>
                  <span className="sidebar-label">{label}</span>
                </NavLink>
                {path === '/experiencia' && isOpen && (
                  <button className="submenu-toggle" aria-label="Ver áreas de experiencia" aria-expanded={experienceExpanded}
                    aria-controls="experience-submenu" onClick={() => setShowExperience((value) => !value)}>
                    <FaChevronDown className={experienceExpanded ? 'rotated' : ''} />
                  </button>
                )}
              </div>
              {path === '/experiencia' && isOpen && (
                <div className="experience-submenu" id="experience-submenu" hidden={!experienceExpanded}>
                  <NavLink to="/experiencia/informatica" onClick={closeSidebar}>En informática</NavLink>
                  <NavLink to="/experiencia/otras-areas" onClick={closeSidebar}>En otras áreas</NavLink>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <span className="nav-caption sidebar-label">CONECTEMOS</span>
          <div className="social-links">
            <a href="https://github.com/LuisCano23" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub de Luis Cano"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/luis-cano-vicencio-1a6a20326/" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="LinkedIn de Luis Cano"><FaLinkedinIn /></a>
          </div>
          <span className="aero-signature sidebar-label"><FaLeaf aria-hidden="true" /> Un pequeño rincón digital.</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
