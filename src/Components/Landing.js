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
    <div id="fullLanding">
      {" "}
      <div id="hands"></div>
      <div className="landing">
        {" "}
        <div>
          {" "}
          <h1> Welcome to Encourage<b>MINT</b>,</h1>
          <br/>
          <div id="welcome">
            <h4>A community <b>OF</b> and <b>FOR</b> people affected by breast cancer.</h4>
            <br/>
            <h5>
            Join now to chat with community members that understand what you’re going through whether you are in treatment, providing care, or in remission.
            </h5>
          </div>
        </div>
        <div id="landingLinks">
          <Button id="openAbout" onClick={handleAbout}>
            About EncourageMINT
          </Button>
          <br/>
          <br/>
          <div id="loginsignup">
            <Button variant="light" onClick={handleLogin}>
              Log In
            </Button>

            <div> or </div>

            <Button variant="light" onClick={handleSignup}>
              Sign Up
            </Button>
          </div>
        </div>
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
    </div>
  );
}

export default Landing;
