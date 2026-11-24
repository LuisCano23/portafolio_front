import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 991px)').matches);
  const [sidebarOpen, setSidebarOpen] = useState(() => !window.matchMedia('(max-width: 991px)').matches);
  const { pathname } = useLocation();

  useEffect(() => {
    const media = window.matchMedia('(max-width: 991px)');
    const onChange = (event) => {
      setIsMobile(event.matches);
      setSidebarOpen(!event.matches);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  const closeSidebar = () => {
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className={`app-shell ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header toggleSidebar={() => setSidebarOpen((open) => !open)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} isMobile={isMobile} closeSidebar={closeSidebar} />
      <div className="app-content" inert={isMobile && sidebarOpen}>
        <main id="contenido" className="page-content" tabIndex={-1}><Outlet /></main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
