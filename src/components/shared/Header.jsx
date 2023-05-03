/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='mt-3' bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><Link className="text-decoration-none" to="/">
        Kitchen Chronicles
            </Link></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-decoration-none" to="/blog">
              Blog
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
