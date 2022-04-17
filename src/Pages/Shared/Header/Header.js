import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div className='bg-violate sticky-top'>
                  <Navbar collapseOnSelect className='navbar' expand="lg">
                        <Container>
                              <Link to="/" className='text-white text-decoration-none h3 my-auto fw-bold'>Samad's Edu Care</Link>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                          <Link to="/" className='nav-link text-white'>Home</Link>
                                          <Link to="/services" className='nav-link text-white'>Services</Link>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;