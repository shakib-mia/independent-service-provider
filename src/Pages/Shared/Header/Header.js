import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div className='bg-violate'>
                  <Navbar collapseOnSelect className='navbar' expand="lg">
                        <Container>
                              <Link to="/" className='text-white text-decoration-none h3 fw-bold'>React-Bootstrap</Link>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-light' />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                          <Link className='nav-link text-white' to='/'>Home</Link>
                                          <Link className='nav-link text-white' to='/services'>Services</Link>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;