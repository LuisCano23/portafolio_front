import { Link } from 'react-router-dom';
import { FaBars, FaEnvelope, FaPhoneAlt, FaTimes } from 'react-icons/fa';

const Header = ({ toggleSidebar, sidebarOpen }) => (
  <header className="site-header glass-panel">
    <div className="header-identity">
      <button id="navigation-toggle" className="icon-button menu-toggle" onClick={toggleSidebar}
        aria-label={sidebarOpen ? 'Contraer menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={sidebarOpen} aria-controls="portfolio-navigation">
        {sidebarOpen ? <FaTimes className="mobile-close-icon" /> : null}
        <FaBars className={sidebarOpen ? 'desktop-menu-icon' : ''} />
      </button>
      <Link to="/" className="brand" aria-label="Luis Cano, inicio">
        <span className="brand-mark" aria-hidden="true">lc<span>.</span></span>
        <span className="brand-name">Luis Cano<span>Portafolio profesional</span></span>
      </Link>
    </div>
    <div className="header-contact">
      <a href="tel:+56957749608" className="header-phone"><FaPhoneAlt aria-hidden="true" /><span>+56 9 5774 9608</span></a>
      <a href="mailto:luis.cano.vic24@gmail.com" className="contact-button" aria-label="Conversemos por correo"><FaEnvelope aria-hidden="true" /><span>Conversemos</span></a>
    </div>
  </header>
);

export default Header;
