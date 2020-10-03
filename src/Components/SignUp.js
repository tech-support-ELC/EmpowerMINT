import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SignUp = ({ history }, props) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, username } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        const UID = app.auth().currentUser.uid; //GETS USER ID FROM AUTHENTICAITON
        app
          .database()
          .ref("users/" + UID)
          .set({ username: username.value });
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const close = props.onHide;
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignUp}>
          <Row>
            <Col>
              <Form.Group controlId="newName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="string" placeholder="New display name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="newEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="newPass">
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type="string"
                  placeholder="secretPasswordLookAway!"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="newPronouns">
                <Form.Label>Pronouns</Form.Label>
                <Form.Control type="string " placeholder="They/them/theirs" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="newType">
            <Form.Label>
              Choose the identifier that best describes you
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
          <Form.Group controlId="newBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" type="submit">
          Sign Up
        </Button>
      </Modal.Footer>
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
