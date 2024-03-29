import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
      const email = localStorage.getItem('email');
      const SignOut = () => {
            localStorage.removeItem('email');
            window.location.reload()
      }

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
                                          <NavLink to="/aboutme" className='nav-link text-white'>About Me</NavLink>
                                          <NavLink to="/blogs" className="nav-link text-white">Blogs</NavLink>
                                          {
                                                email ? <span className='text-white my-auto'>{email} <button className='btn btn-secondary' onClick={SignOut}>SignOut</button></span>
                                                      :
                                                      <NavLink to="/login" className='nav-link text-white'>Sign In</NavLink>
                                          }
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;