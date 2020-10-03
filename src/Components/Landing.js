import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { SignUp, LogIn } from "./index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

function Landing() {
  const [showSignup, setSignup] = useState(false);
  const [showLogin, setLogin] = useState(false);

  const handleClose = () => {
    setLogin(false);
    setSignup(false);
  };
  const handleLogin = () => setLogin(true);
  const handleSignup = () => setSignup(true);
  return (
    <div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Log in/Sign up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">About EmpowerMINT</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title> Welcome to EncourageMINT,</Card.Title>
          <Card.Text>
            a community of people affected by breast cancer. Join now to be
            matched with community members based on the kind of support YOU ask
            for.
          </Card.Text>
          <Button variant="light" onClick={handleLogin}>
            Log In
          </Button>
          <Button variant="light" onClick={handleSignup}>
            Sign Up
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showSignup} onHide={handleClose} animation={false}>
        <SignUp onHide={handleClose} />
      </Modal>

      <Modal show={showLogin} onHide={handleClose} animation={false}>
        <LogIn onHide={handleClose} />
      </Modal>
    </div>
  );
}

export default Landing;
