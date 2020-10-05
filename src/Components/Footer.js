import React, { useState } from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { About } from "./index";

import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

function Footer() {
  const [showAbout, setAbout] = useState(false);
  const handleClose = () => {
    setAbout(false);
  };
  const handleAbout = () => setAbout(true);
  return (
    <footer className="fixed-bottom">
      <Navbar color="dark" dark>
        <Container>
          <Navbar.Brand href="/home">
            <img
              className="footer-logo"
              src={require("../images/transparentlogo.png")}
              alt="hand with mint leaf"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <IconButton onClick={handleAbout}>
              {" "}
              <HelpIcon className="header-icon" style={{ fontSize: 40 }} />
            </IconButton>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Modal  show={showAbout} onHide={handleClose} animation={false}>
        <About onHide={handleClose} />
      </Modal>
    </footer>
  );
}

export default Footer;
