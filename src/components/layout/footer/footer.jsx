import { FaLeaf } from 'react-icons/fa';

const Footer = () => (
  <footer className="site-footer">
    <span>© {new Date().getFullYear()} Luis Cano</span>
    <span className="footer-aero"><FaLeaf aria-hidden="true" /> Inspirado en Frutiger Aero</span>
    <a href="mailto:luis.cano.vic24@gmail.com">luis.cano.vic24@gmail.com</a>
  </footer>
);

export default Footer;
