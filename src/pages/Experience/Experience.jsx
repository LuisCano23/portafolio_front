import { Link } from 'react-router-dom';
import { FaLaptopCode, FaBriefcase, FaLeaf } from 'react-icons/fa';

const Experience = () => (
  <div className="container py-5 fade-in">
    <div className="text-center mb-5">
      <div className="d-flex justify-content-center mb-3" aria-hidden="true"><div className="float-animation"><FaBriefcase /></div><div className="float-animation"><FaLeaf /></div></div>
      <h1 className="display-4 fw-bold mb-3">Mi experiencia laboral</h1>
      <p className="lead" style={{ color: 'var(--teal)' }}>Cada experiencia, una oportunidad de aprender y aportar.</p>
    </div>
    <div className="experience-options">
      <Link to="/experiencia/informatica" className="explore-card glass-card">
        <span className="feature-icon feature-blue"><FaLaptopCode aria-hidden="true" /></span>
        <h2>En informática</h2>
        <p>Mi práctica profesional en Net-works y mi participación en el desarrollo de aplicaciones web.</p>
        <span className="explore-link">Ver experiencia en informática</span>
      </Link>
      <Link to="/experiencia/otras-areas" className="explore-card glass-card">
        <span className="feature-icon feature-green"><FaBriefcase aria-hidden="true" /></span>
        <h2>En otras áreas</h2>
        <p>Mi experiencia en Family shop, atención a clientes, gestión de caja y trabajo en equipo.</p>
        <span className="explore-link">Ver experiencia en otras áreas</span>
      </Link>
    </div>
  </div>
);

export default Experience;
