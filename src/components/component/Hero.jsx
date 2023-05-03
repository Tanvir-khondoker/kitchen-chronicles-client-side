/* eslint-disable no-unused-vars */

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button, Container, Row, Col, Image } from 'react-bootstrap';


const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mt-4 mb-4">
        <Container>
          <Row className="hero-content d-flex flex-col lg:flex-row-reverse align-items-center gap">
            <Col lg={6}>
              <Image
                src="https://i.ibb.co/2F7jww9/grilled-beef-steak-dark-wooden-surface.jpg"
                fluid
                rounded
              />
            </Col>
            <Col lg={6}>
              <h1 className="text-5xl font-bold">
                Choose your best quality food
              </h1>
              <p className="py-6">
                Discover the joy of cooking with our wide selection of recipes
                and expert tips from top chefs around the world. Whether a
                seasoned home cook or just starting out, we have everything you
                need to create delicious and memorable meals for you and your
                loved ones. Browse our collection today and unleash your inner
                chef
              </p>
              <Button variant="primary">
                Full View Menu <FaArrowRight className="ms-1" />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};


export default Hero;


