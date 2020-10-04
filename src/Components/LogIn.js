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

const LogIn = (history) => {
  // const { history } = props;
  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        const UID = app.auth().currentUser.uid; //GETS USER ID FROM AUTHENTICAITON
        app
          .database()
          .ref("users/" + UID)
          .once("value")
          .then(function (snapshot) {
            console.log(snapshot.val(), "user????");
          });
        // props.onHide();
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Form onSubmit={handleLogIn}>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
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
        <Button variant="light" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(LogIn);
