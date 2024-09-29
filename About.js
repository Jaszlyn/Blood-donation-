import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
function About(){
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
        <Row>
            <Col><h1>About Blood Donation</h1>
            <p>Imports of Blood Donation
Increased blood supply
Availability of different blood types support for medical emergencies
Ability to perform complex surgeries
Reduced risk of blood shortages
Improved patient outcomes
Community support and solidarity
Opportunity for volunteer engagement
Enhanced healthcare infrastructure
Lifesaving impact on individuals</p></Col>
            <Col>
            <Image src="https://www.serc.ac.uk/WebsiteUserImages/News/2019/03%20Mar/Blood%20Donation.png" thumbnail /></Col>
        </Row>
      </Container>
        </div>
    );
}
export default About;