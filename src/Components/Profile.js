import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateProfile from "./UpdateProfile";

function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Username</Card.Header>
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>Warrior X</Card.Text>
          <Card.Text>Bio</Card.Text>
          <Button variant="light" onClick={handleShow}>
            Edit profile
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} animation={false}>
        <UpdateProfile onHide={handleClose} />
      </Modal>
    </div>
  );
}

export default Profile;
