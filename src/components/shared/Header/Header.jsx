/* eslint-disable no-unused-vars */
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar className='mt-3' bg="light" variant="light">
      <Container className='d-flex text-align-center'>
        <Navbar.Brand href="#home">
          <NavLink className="text-decoration-none" to="/">
            Kitchen Chronicles
          </NavLink>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <NavLink
              className="text-decoration-none"
              activeClassName="active"
              exact
              to="/">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className="text-decoration-none"
              activeClassName="active"
              to="/blog">
              Blog
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;





  
