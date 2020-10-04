/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import * as firebase from "firebase/app";
import app from "../firebase";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LogIn = (props, history) => {
  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await app.auth().SignInWithEmailAndPassword(email.value, password.value);
        const UID = app.auth().currentUser.uid; //GETS USER ID FROM AUTHENTICAITON
        app
          .database()
          .ref("users/" + UID)
          .once("value");
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
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="string" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={close}>
          Log in
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default LogIn;
