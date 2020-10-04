import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { SignUp, LogIn, About } from "./index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

function Landing() {
  const [showSignup, setSignup] = useState(false);
  const [showLogin, setLogin] = useState(false);
  const [showAbout, setAbout] = useState(false);

  const handleClose = () => {
    setLogin(false);
    setSignup(false);
    setAbout(false);
  };
  const handleLogin = () => setLogin(true);
  const handleSignup = () => setSignup(true);
  const handleAbout = () => setAbout(true);
  return (
    <div id="landing">
      <h1> Welcome to EncourageMINT,</h1>
      <h4>
        a community of people affected by breast cancer. Join now to be matched
        with community members based on the kind of support YOU ask for.
      </h4>
      <div id="loginsignup">
        <Button variant="light" onClick={handleLogin}>
          Log In
        </Button>

        <div> or </div>

        <Button variant="light" onClick={handleSignup}>
          Sign Up
        </Button>
      </div>
      <Button variant="light" onClick={handleAbout}>
        About EncourageMINT
      </Button>

      <Modal show={showSignup} onHide={handleClose} animation={false}>
        <SignUp onHide={handleClose} />
      </Modal>

      <Modal show={showLogin} onHide={handleClose} animation={false}>
        <LogIn onHide={handleClose} />
      </Modal>

      <Modal show={showAbout} onHide={handleClose} animation={false}>
        <About onHide={handleClose} />
      </Modal>
    </div>
  );
}

export default Landing;
