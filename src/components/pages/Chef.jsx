/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col,CardGroup, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const chefDetails = useLoaderData();
    const{name,short_bio,chef_picture,experience_years,num_recipes,likes} = chefDetails;
    const{first_recipe,second_recipe,third_recipe} = chefDetails.recipes;
  return (
    <div>
    <Card style={{width:'65%'}} className='mx-auto mt-5 mb-5 border-0' >
      <Card.Img className='mx-auto' variant="top" src={chef_picture} style={{width:'500px',height:'400px'}}/>
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
        <Card.Text>
          {short_bio}
        </Card.Text>
        <p className='mx-auto'><span>Has over {experience_years} Years of experiences,</span>
        
        <span className='ms-5'>Total recipes : {num_recipes}</span>
        </p>
        <p className="text-center font-weight-bold">Total Likes:{likes}</p>
      </Card.Body>
    </Card>
    <h5 className='text-center mb-3'>Top three selected Recipes of this chef</h5>


    
    
    <CardGroup className='p-5 row'>
     
     
      <Card className='col-md-6'>
        <Card.Img style={{height:'300px'}} className='mx-auto rounded w-full'  variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card Title 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      
      
      
      
      </Card>
      <Card className='col-md-6'>
        <Card.Img style={{height:'300px'}} className='mx-auto rounded w-full' variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{third_recipe.recipe_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
     
     
     
     
     
     
      </Card>
      <Card className='col-md-6'>
        <Card.Img style={{height:'300px'}} className='mx-auto rounded w-full' variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{third_recipe.recipe_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-success" className='mx-auto'>Add to favorite</Button>
        </Card.Footer>
      </Card>
    </CardGroup>



    </div>
  );
};

export default Chef;
