/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const Login = () => {
 
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    
  };

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
                  <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" className='mt-4' type="submit" block>
                  Login
                </Button>
                <Form.Text className='text-success'>
                    
                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
              </Form>
              <Card.Text className="mt-3 text-center">
                Don't Have an Account? <Link to="/register">Register</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
