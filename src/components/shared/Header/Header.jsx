import './Header.css'
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar bg="light" variant="light" className="mt-3">
      <Container>
        <Navbar.Brand>
          <NavLink className="text-decoration-none" to="/">
            Kitchen Chronicles
          </NavLink>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact className="text-decoration-none">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blog" className="text-decoration-none">
            Blog
          </Nav.Link>
          {user && <Nav.Link as={NavLink} to="/#" className="text-decoration-none">
            <FaUserCircle style={{fontSize:'2rem'}}/>
          </Nav.Link>}
          {user?<Button variant='secondary'>Logout</Button>:
          <Link to='/login'>
            <Button>Login</Button>
          </Link>  
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
