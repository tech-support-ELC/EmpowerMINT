import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Home.css";
const db = [
  {
    username: "CodyPug",
    bio: "I'm a certified dog trainer. My puppies are certified support dogs.",
    pronouns: "they/them",
  },
  {
    username: "ReadingKing",
    bio: "I'm here to offer support & book recommendations!",
    pronouns: "he/his",
  },
  {
    username: "FighterGal123",
    bio: "I make candles with essential oil.",
    pronouns: "she/hers",
  },
];

function Home() {
  const users = db;

  return (
    <div id="cardContainer">
      {users.map((user) => {
        return (
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{user.username}</Card.Title>
              <Card.Text>
                {user.pronouns}
                <br />
                {user.bio}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="success" href="chats" size="sm">
                Chat
              </Button>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
