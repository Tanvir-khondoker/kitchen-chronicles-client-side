/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{marginTop:'150px', width:'95%'}}   className="bg-light border  p-3  mx-auto ">
      <Container className="py-4 bg-info-subtle">
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h4>About Us</h4>
            <p>
              We are a platform for chefs and food enthusiasts to share and
              discover new recipes. Our goal is to provide a user-friendly
              experience for browsing and organizing your favorite recipes. Join
              our community to connect with other food lovers and explore the
              world of culinary delights!
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h4>Contact</h4>
            <p>
              1234 Main St., Suite 100
              <br />
              Nyc, USA 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@chefsrecipe.com
            </p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <p>
              Stay up-to-date with the latest recipes and news from chef Recipe:
            </p>
            <div className="d-flex justify-content-center">
              
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark py-3">
        <Container className="text-center">
          <p className="mb-0 text-light">
            &copy; 2023 Chefs Recipe. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
