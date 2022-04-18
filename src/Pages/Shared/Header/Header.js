import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
      const email = localStorage.getItem('email')
      return (
            <div className='bg-violate sticky-top'>
                  <Navbar collapseOnSelect className='navbar' expand="lg">
                        <Container>
                              <Link to="/" className='text-white text-decoration-none h3 my-auto fw-bold'>Samad's Edu Care</Link>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                          <NavLink to="/" className='nav-link text-white'>Home</NavLink>
                                          <NavLink to="/services" className='nav-link text-white'>Services</NavLink>
                                          <NavLink to="/blogs" className="nav-link text-white">Blogs</NavLink>
                                          {
                                                email ? <span className='text-white my-auto'>{localStorage.getItem('name')} <button>SignOut</button></span> : <NavLink to="/login" className='nav-link text-white'>Sign In</NavLink>
                                          }
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;