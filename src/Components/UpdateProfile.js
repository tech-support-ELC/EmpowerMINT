import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function UpdateProfile(props) {
  const close = props.onHide;
  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
