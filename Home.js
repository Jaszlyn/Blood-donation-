import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Home(){
    return(
        <div>
 <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" >Blood Donation Camp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

<Container >
  <Row>
    <Col>
    <h1>Welcome To Blood Donation Camp</h1>
    <p>Your Donations can save lives. Join us in our mission to help save those in need  </p>
 </Col>
  </Row>
  <Row>
  <Col xs={6} md={4}>
          <Image src="https://www.wellahealth.com/blog/wp-content/uploads/2024/05/Blood-1.png" rounded />
        </Col>
       <Col></Col>
        <Col xs={6} md={4}>
          <Image src="https://onemedicalgroup.co.uk/wp-content/uploads/2020/11/blood-donation-qatar.jpg" rounded />
        </Col>
  </Row>

</Container>
        </div>
    );
}
export default Home;