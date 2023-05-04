/* eslint-disable no-unused-vars */
import { Toast } from "react-bootstrap";
import React, { useState } from "react";

import { Container, Row, Col, CardGroup, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const chefDetails = useLoaderData();
  const {
    name,
    short_bio,
    chef_picture,
    experience_years,
    num_recipes,
    likes,
  } = chefDetails;
  const { first_recipe, second_recipe, third_recipe } = chefDetails.recipes;
  return (
    <div>
      <Card style={{ width: "65%" }} className="mx-auto mt-5 mb-5 border-0">
        <Card.Img
          className="mx-auto"
          variant="top"
          src={chef_picture}
          style={{ width: "500px", height: "400px" }}
        />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text>{short_bio}</Card.Text>
          <p className="mx-auto">
            <span>Has over {experience_years} Years of experiences,</span>

            <span className="ms-5">Total recipes : {num_recipes}</span>
          </p>
          <p className="text-center font-weight-bold"> Likes : {likes}</p>
        </Card.Body>
      </Card>
      <h5 className="text-center mb-3">
        Top three selected Recipes of this chef
      </h5>

      <CardGroup className="p-5 row">
        <Card className="col-md-6">
          <Card.Img
            style={{ height: "300px" }}
            className="mx-auto rounded w-full"
            variant="top"
            src={first_recipe.recipe_picture}
          />
          <Card.Body>
            <Card.Title>{first_recipe.recipe_name}</Card.Title>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Ingredients:</span>{" "}
              {first_recipe.ingredients}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Cooking Method:</span>{" "}
              {first_recipe.cooking_method}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Rating:</span>{" "}
              {first_recipe.rating}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => {
                setAddedToFavorites(true);
                setShowToast(true);
              }}
              disabled={addedToFavorites} variant="outline-success" className="mx-auto">
              Add to favorite
            </Button>
          </Card.Footer>
        </Card>

        <Card className="col-md-6">
          <Card.Img
            style={{ height: "300px" }}
            className="mx-auto rounded w-full"
            variant="top"
            src={second_recipe.recipe_picture}
          />
          <Card.Body>
            <Card.Title>{second_recipe.recipe_name}</Card.Title>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Ingredients:</span>{" "}
              {second_recipe.ingredients}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Cooking Method:</span>{" "}
              {second_recipe.cooking_method}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Rating:</span>{" "}
              {second_recipe.rating}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => {
                setAddedToFavorites(true);
                setShowToast(true);
              }}
              disabled={addedToFavorites} variant="outline-success" className="mx-auto">
              Add to favorite
            </Button>
          </Card.Footer>
        </Card>

        <Card className="col-md-6">
          <Card.Img
            style={{ height: "300px" }}
            className="mx-auto rounded w-full"
            variant="top"
            src={third_recipe.recipe_picture}
          />
          <Card.Body>
            <Card.Title>{third_recipe.recipe_name}</Card.Title>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Ingredients:</span>{" "}
              {third_recipe.ingredients}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Cooking Method:</span>{" "}
              {third_recipe.cooking_method}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Rating:</span>{" "}
              {third_recipe.rating}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              onClick={() => {
                setAddedToFavorites(true);
                setShowToast(true);
              }}
              disabled={addedToFavorites}
              variant="outline-success"
              className="mx-auto"
            >
              Add to favorite
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          backgroundColor: "green",
          color: "white",
        }}
      >
        <Toast.Body>This recipe has been added to your favorites!</Toast.Body>
      </Toast>
    </div>
  );
};

export default Chef;
