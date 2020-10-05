import React from "react";
// import "./style/Header.scss";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar id="nav" bg="light" expand="sm">
        <Navbar.Brand href="/home">
          <img
            className="header-logo"
            src={require("../images/plainleaf.png")}
            alt="hand with mint leaf"
            //WANT TO FIX SIZING HERE
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="mr" style={{ marginRight: 0 }}>
            <Nav.Link href="/profile">
              <IconButton>
                <PersonIcon className="header-icon" style={{ fontSize: 20 }} />
              </IconButton>
            </Nav.Link>

            <Nav.Link href="/chats">
              <IconButton>
                <ChatIcon className="header-icon" style={{ fontSize: 20 }} />
              </IconButton>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
