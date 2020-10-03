import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <footer className="fixed-bottom">
      <Navbar color="dark" dark>
        <Container>
          <Navbar.Brand href="home">
            <img
              className="footer-logo"
              src={require("../images/transparentlogo.png")}
              alt="hand with mint leaf"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
    // <Container>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col xs={6}>2 of 3 (wider)</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    // </Container>
  );
}

export default Footer;
