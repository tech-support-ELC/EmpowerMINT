import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";

import ChatIcon from "@material-ui/icons/Chat";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" expand="xl">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <PersonIcon />
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <ChatIcon />
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      {/* <PersonIcon />
      <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png" alt="tinder-logo" />
      <ChatIcon /> */}
    </div>
  );
}

export default Header;