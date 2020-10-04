import React from "react";
import {Card,Button} from "react-bootstrap"

function Home() {
  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Username</Card.Title>
          <Card.Text>
            The user's bio will go here
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Pass Button</Button>
          <Button variant="primary">Match Button</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Home;
