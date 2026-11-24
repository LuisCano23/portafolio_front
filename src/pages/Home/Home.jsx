import { Link } from 'react-router-dom';
import { FaCode, FaShieldAlt, FaLeaf, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Home = () => (
  <div className="home-page fade-in">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <span className="eyebrow"><FaLeaf aria-hidden="true" /> BIENVENIDO A MI MUNDO DIGITAL</span>
        <h1 id="home-title">Hola, soy<br /><span>Luis Cano.</span></h1>
        <p className="hero-description">Técnico en informática con mención en ciberseguridad.</p>
        <p className="hero-intro">Aprender, crear y encontrar nuevas formas de hacer las cosas.</p>
        <div className="hero-actions">
          <Link className="btn-frutiger" to="/experiencia"><FaBriefcase aria-hidden="true" /> Mi experiencia</Link>
          <a className="btn-frutiger-secondary" href="mailto:luis.cano.vic24@gmail.com"><FaEnvelope aria-hidden="true" /> Conversemos</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orb-shadow" />
        <div className="aero-orb"><div className="orb-grid" /><FaLeaf className="orb-leaf" /><span className="orb-shine" /></div>
        <div className="floating-chip chip-code"><span><FaCode /></span>Desarrollo web</div>
        <div className="floating-chip chip-shield"><span><FaShieldAlt /></span>Ciberseguridad</div>
        <span className="aero-bubble bubble-one" /><span className="aero-bubble bubble-two" /><span className="aero-bubble bubble-three" />
        <span className="art-caption">TECNOLOGÍA · CURIOSIDAD · NATURALEZA</span>
      </div>
      <div className="hero-bottom"><span>Mi portafolio profesional</span><span>Un espacio para conocer lo que hago.</span></div>
    </section>
    <section className="about-section glass-card" aria-labelledby="about-title">
      <div className="about-heading">
        <span className="eyebrow">UN POCO SOBRE MÍ</span>
        <h2 id="about-title">El entusiasmo de<br /><span>seguir aprendiendo.</span></h2>
        <div className="about-tags"><span><FaCode aria-hidden="true" /> Desarrollo web</span><span><FaShieldAlt aria-hidden="true" /> Ciberseguridad</span></div>
      </div>
      <div className="about-copy">
        <p>Mi nombre es Luis Cano y soy titulado de la carrera de Técnico en Informática con mención en Ciberseguridad. Durante mi formación y en mis proyectos personales he desarrollado una sólida base en el desarrollo de aplicaciones web, área en la que destaco por mi aprendizaje rápido y mi capacidad para adaptarme a nuevos desafíos.</p>
        <p>Me considero una persona motivada, proactiva y con muchas ganas de seguir creciendo profesionalmente. Disfruto aprender nuevas tecnologías y trabajar en equipo, manteniendo siempre la responsabilidad y el compromiso como parte fundamental de mi manera de trabajar.</p>
        <p>Quedo totalmente disponible para ser considerado en cualquier oportunidad laboral donde pueda aportar con mis conocimientos, dedicación y entusiasmo. Si mi perfil es de su interés, los invito cordialmente a ponerse en contacto conmigo.</p>
        <p className="about-thanks">Gracias por tu tiempo y por visitar mi portafolio.</p>
      </div>
    </section>
    <section className="explore-section" aria-labelledby="explore-title">
      <div className="section-heading"><div><span className="eyebrow">SIGUE EXPLORANDO</span><h2 id="explore-title">Conoce mi recorrido</h2></div><FaLeaf aria-hidden="true" /></div>
      <div className="explore-grid">
        <Link to="/habilidades" className="explore-card glass-card"><span className="feature-icon feature-blue"><FaCode aria-hidden="true" /></span><h3>Mis habilidades</h3><p>Las tecnologías y herramientas con las que trabajo.</p><span className="explore-link">Explorar habilidades</span></Link>
        <Link to="/experiencia" className="explore-card glass-card"><span className="feature-icon feature-green"><FaBriefcase aria-hidden="true" /></span><h3>Mi experiencia</h3><p>Mi trayectoria profesional y lo que he aprendido.</p><span className="explore-link">Conocer mi experiencia</span></Link>
        <Link to="/trayectoria" className="explore-card glass-card"><span className="feature-icon feature-aqua"><FaGraduationCap aria-hidden="true" /></span><h3>Mi formación</h3><p>Los pasos que han marcado mi desarrollo académico.</p><span className="explore-link">Ver mi trayectoria</span></Link>
      </div>
    </section>
  </div>
);

export default Home;
