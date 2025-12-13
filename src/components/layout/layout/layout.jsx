import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 992) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      
      <main 
        className="flex-grow-1"
        style={{ 
          marginTop: '60px',
          marginLeft: sidebarOpen && window.innerWidth >= 992 
            ? (sidebarOpen ? '250px' : '70px')
            : '0',
          transition: 'margin-left 0.3s ease'
        }}
      >
        <div className="container-fluid">
          {/* Outlet renderiza las páginas hijas */}
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;