/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn,signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        //    console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleSignIn = () =>{
      signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
           console.log(loggedUser);
        navigate(from, { replace: true });
      }).catch((error) => {
        console.log(error);
      });
  }
  const githubSignIn = () =>{
      signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
           console.log(loggedUser);
        navigate(from, { replace: true });
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Header as="h3" className="text-center">
              Please Login
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button variant="primary" className="mt-4" type="submit" block>
                  Login
                </Button>
                <Form.Text className="text-success"></Form.Text>
                <Form.Text className="text-danger"></Form.Text>
              </Form>
              <Card.Text className="mt-3 text-center">
                Don't Have an Account? <Link to="/register">Register</Link>
              </Card.Text>
              <div className="mt-4 mx-auto">
                <Button onClick={googleSignIn}  className="d-block mb-2" variant="secondary">
                  <FaGoogle /> Login with Google
                </Button>
                <Button onClick={githubSignIn} variant="secondary">
                  <FaGithub /> Login with Github
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
