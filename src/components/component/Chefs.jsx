/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    const fetchChefsData = async () => {
      try {
        const response = await fetch("http://localhost:5000/chefs");
        const data = await response.json();
        setChefsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChefsData();
  }, []);

  return (
    <div style={{marginTop:'200px'}}>
        <h2 className="text-center">Our Top Well Known Turkish Chefs</h2>
      <Row style={{width:'95%'}} className="justify-content-center mx-auto mt-5">
        {chefsData.map((chef) => (
          <Col xs={12} sm={12} md={6} lg={4} className="mb-4"  key={chef.id}>
            <Card >
              <Card.Img style={{ height: "300px" }} variant="top" src={chef.chef_picture} />
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>
                  <div>Years of experience: {chef.experience_years}</div>
                  <div>Numbers of recipes: {chef.num_recipes}</div>
                  <div>Likes: {chef.likes}</div>
                </Card.Text>
                <Button variant="primary">
                  <Link className="text-white text-decoration-none" to={`/chefs/${chef.id}`}>
                  View Recipes <FaArrowRight/>
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Chefs;
