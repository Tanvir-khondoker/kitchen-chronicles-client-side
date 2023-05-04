import "./Header.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar bg="light" variant="light" className="mt-3" expand="sm">
      <Container>
        <Navbar.Brand>
          <NavLink className="text-decoration-none" to="/">
            Kitchen Chronicles
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="d-flex align-items-center ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              exact={true}
              className="text-decoration-none"
            >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="text-decoration-none">
              Blog
            </Nav.Link>
            {user && (
              <Nav.Link as={NavLink} to="/#" className="text-decoration-none">
                {user && (
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{user?.displayName?user.displayName:'No name found'}</Tooltip>}
                  >
                    <Nav.Link
                      as={NavLink}
                      to="/#"
                      className="text-decoration-none"
                    >
                      <img
                        className="rounded"
                        style={{ width: "40px" }}
                        src={user.photoURL}
                        alt={user.displayName || 'User Photo'}
                      />
                    </Nav.Link>
                  </OverlayTrigger>
                )}
              </Nav.Link>
            )}
            {user ? (
              <Button style={{ height: "40px" }} onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
