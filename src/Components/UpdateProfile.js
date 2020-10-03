import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UpdateProfile(props) {
  const close = props.onHide;
  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="newName">
                  <Form.Label>Display Name</Form.Label>
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
          <Button variant="light" onClick={close}>
            Save Changes
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
}

export default UpdateProfile;
