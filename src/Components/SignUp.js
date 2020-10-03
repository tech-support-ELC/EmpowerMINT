import { EventAvailableOutlined } from "@material-ui/icons";
import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import {Modal, Button, Form, Row, Col} from "react-bootstrap";

const SignUp = ({ history }) => {

  // const [pronouns, setPronouns] = useState('')

  // const handleChange = (event) => {
  //   setPronouns(event.target.value)
  // }

  const handleSignUp = useCallback(
    async (event) => {

      event.preventDefault();

      const { email, password, username, pronouns, type, bio } = event.target.elements;

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        const UID = app.auth().currentUser.uid; //GETS USER ID FROM AUTHENTICAITON
        app
          .database()
          .ref("users/" + UID)
          .set({ 
            username: username.value, 
            pronouns: pronouns.value,
            type: type.value,
            bio: bio.value
          });
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      {/* <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title> */}
      {/* </Modal.Header> */}
      {/* <Modal.Body> */}
        <Form onSubmit={handleSignUp}>
          <Row>
            <Col>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="string" placeholder="New display name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type="string"
                  placeholder="secretPasswordLookAway!"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="pronouns">
                <Form.Label>Pronouns</Form.Label>
                <Form.Control as="select" multiple>
                  <option>She/Hers</option>
                  <option>Him/His</option>
                  <option>They/Them</option>
                </Form.Control >
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="type">
            <Form.Label>
              I am a: 
            </Form.Label>
            <Form.Control as="select" multiple>
              <option>Survivor</option>
              <option>Supporter</option>
              <option>Warrior - Stage 1</option>
              <option>Warrior - Stage 2</option>
              <option>Warrior - Stage 3</option>
              <option>Warrior - Stage 4</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        {/* </Form> */}
      {/* </Modal.Body>
      <Modal.Footer> */}
        <Button variant="light" type="submit">
          Sign Up
        </Button>
        </Form>
      {/* </Modal.Footer> */}
    </div>

    // <div>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleSignUp}>
    //     <label>
    //       email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>

    //     <label>
    //       password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>

    //     <label>
    //       username
    //       <input name="username" type="username" placeholder="Username" />
    //     </label>

    //     <div>
    //       <label>pronouns</label>

    //       <select>
    //         <option>she/hers</option>
    //         <option>him/his</option>
    //         <option>they/them</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label>I am a:</label>

    //       <select>
    //         <option>Survivor</option>
    //         <option>Supporter</option>
    //         <option>Warrior - Stage 1</option>
    //         <option>Warrior - Stage 2</option>
    //         <option>Warrior - Stage 3</option>
    //         <option>Warrior - Stage 4</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label>
    //         Bio/Interests
    //         <input
    //           name="Bio/Interests"
    //           type="text"
    //           placeholder="Bio/Interests"
    //         />
    //       </label>
    //     </div>

    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
  );
};

export default withRouter(SignUp);
