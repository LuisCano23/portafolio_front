import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaUserCircle, FaLeaf, FaWater } from 'react-icons/fa';

const Header = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className="glass-panel"
      style={{ 
        height: '70px',
        zIndex: 1030,
        margin: '10px 15px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 8px 32px rgba(77, 255, 208, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
      }}
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <Button 
            onClick={toggleSidebar}
            className="border-0 bg-transparent me-2 d-lg-none"
            style={{ 
              color: 'var(--emerald)',
              fontSize: '1.3rem'
            }}
          >
            <FaBars />
          </Button>
          
          <Button 
            onClick={toggleSidebar}
            className="border-0 bg-transparent me-3 d-none d-lg-block"
            style={{ 
              color: 'var(--emerald)',
              fontSize: '1.3rem'
            }}
          >
            <FaBars />
          </Button>
          
          <Navbar.Brand href="/" className="d-flex align-items-center ms-2">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <FaLeaf style={{ 
                  color: 'var(--emerald)', 
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }} />
              </div>
              <div className="d-flex flex-column">
                <span className="fw-bold" style={{ 
                  fontSize: '1.3rem',
                  color: 'var(--emerald)',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.5)'
                }}>
                  Luis Alberto Cano Vicencio
                </span>
              </div>
            </div>
          </Navbar.Brand>
        </div>
        
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <div>
            <Nav.Link className="px-3 fw-medium" style={{ color: 'var(--teal)' }}>
              Tel: <span>+56957749608</span>
            </Nav.Link>
            <Nav.Link className="px-3 fw-medium" style={{ color: 'var(--teal)' }}>
              Mail: <span>luis.cano.vic24@gmail.com</span>
            </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;