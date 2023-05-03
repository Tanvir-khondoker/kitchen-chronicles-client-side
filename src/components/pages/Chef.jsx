/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Chef = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h2 className="text-green-600">Our Top expert chefs in Turkish cuisine</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Chef;
