import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Register(){
    return(
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Blood Donation Camp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

<Container>
<Form>
      <Row>
        <Col>
        <Form.Label>Name:</Form.Label>
          <Form.Control placeholder="enter name" />
        </Col>
        
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col >
      
        <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="enter email" />
        </Col>
      </Form.Group>
      <Form.Label>Blood Type:</Form.Label>
      <Form.Control placeholder="enter blood type" />
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address:</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Form.Label>Phone number:</Form.Label>
          <Form.Control placeholder="enter number" />
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
    );
}
export default Register;