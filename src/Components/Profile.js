import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateProfile from "./UpdateProfile";

const db = {
  username: "EsteēPink",
  type: "Warrior 2",
  bio: "I love beauty products and traveling.",
  pronouns: "she/hers",
};

function Profile() {
  const data = db;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          <Card.Title>Username: {data.username}</Card.Title>
          <Card.Text>I am a: {data.type}</Card.Text>
          <Card.Text>Pronouns: {data.pronouns}</Card.Text>
          <Card.Text>Bio: {data.bio}</Card.Text>
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
