import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Profile() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Username</Card.Header>
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>Warrior X</Card.Text>
          <Card.Text>Bio</Card.Text>
          <Button variant="light">Edit profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
