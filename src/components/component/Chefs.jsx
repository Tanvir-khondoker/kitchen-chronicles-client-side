/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

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
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        {chefsData.map((chef) => (
          <Card style={{ width: "18rem" }} key={chef.id}>
            <Card.Img variant="top" src={chef.chef_picture} />
            <Card.Body>
              <Card.Title>{chef.name}</Card.Title>
              <Card.Text>
                <div>Years of experience: {chef.experience_years}</div>
                <div>Numbers of recipes: {chef.num_recipes}</div>
                <div>Likes: {chef.likes}</div>
              </Card.Text>
              <Button variant="primary">
                <Link to={`/chefs/${chef.id}`}>View Recipes</Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
