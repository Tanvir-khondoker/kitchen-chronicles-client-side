/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CookingTips = () => {
  return (
    <div className='mt-4 mb-4 mx-auto' style={{width:'80%'}}>
      <h2 className='text-center mb-3'>Cooking Tips for Turkish Food</h2>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLri3lo6_1FhkVbU6KsWPkEPuGlho8NABrtA&usqp=CAU" />
            <Card.Body>
              <Card.Title>Tip #1: Use Fresh Ingredients</Card.Title>
              <Card.Text>
                Turkish cuisine is all about fresh ingredients, so make sure to use the best quality produce, meats, and spices available to you.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLri3lo6_1FhkVbU6KsWPkEPuGlho8NABrtA&usqp=CAU" />
            <Card.Body>
              <Card.Title>Tip #2: Do not Be Afraid to Use Spices</Card.Title>
              <Card.Text>
                Turkish food is known for its bold flavors, so do not shy away from using a variety of spices in your dishes. Cumin, paprika, and sumac are just a few examples of common Turkish spices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLri3lo6_1FhkVbU6KsWPkEPuGlho8NABrtA&usqp=CAU" />
            <Card.Body>
              <Card.Title>Tip #3: Experiment with Yogurt</Card.Title>
              <Card.Text>
                Yogurt is a staple in Turkish cuisine and can be used in a variety of ways. Try using it as a marinade for meat or as a topping for soups and stews.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CookingTips;
