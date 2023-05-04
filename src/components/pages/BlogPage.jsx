/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-5 mb-3 text-primary">Differences between Uncontrolled and Controlled Components</h2>
          <p className="lead">
            In React, controlled components are components whose value is controlled by React, whereas uncontrolled components are components whose value is controlled by the DOM. When using controlled components, React manages the state of the component and updates the value when it changes. In contrast, with uncontrolled components, the value is managed by the DOM, and you need to use a ref to get the current value of the component.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mt-5 mb-3 text-primary">How to Validate React Props using PropTypes</h2>
          <p className="lead">
            PropTypes is a way to validate the type of props that are passed to a component. You can use PropTypes to check whether the props passed to a component are of the expected type. For example, if you have a component that expects a string prop, you can use PropTypes.string to check that the prop is indeed a string. This helps catch errors early on and ensures that your component works as expected.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mt-5 mb-3 text-primary">Difference between Node.js and Express.js</h2>
          <p className="lead">
            Node.js is a runtime environment that allows you to run JavaScript code on the server. It provides a platform for building server-side applications using JavaScript. Express.js, on the other hand, is a framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs. While Node.js provides the runtime environment, Express.js provides the building blocks for creating web applications using Node.js.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mt-5 mb-3 text-primary">Why Create a Custom Hook?</h2>
          <p className="lead">
            Custom Hooks are a way to reuse stateful logic across different components in a React application. You might create a custom hook if you have common functionality that you want to share across different components, such as fetching data from an API, handling forms, or managing local storage. Custom hooks allow you to encapsulate this logic into a single function, which can then be used in multiple components. This can help keep your code clean and organized, and reduce duplication.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mt-5 mb-3 text-primary">What is a Custom Hook?</h2>
          <p className="lead">
            A custom hook is a JavaScript function that starts with the prefix "use" and uses one or more of the built-in React hooks, such as useState or useEffect, to encapsulate some stateful logic. Custom hooks allow you to reuse this logic across different components, without having to repeat it in each component. Custom hooks can also take in additional arguments, and return values that can be used by the component. Custom hooks are a powerful tool for organizing and reusing stateful logic in React applications.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
