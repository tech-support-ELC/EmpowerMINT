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
    <div id="cardContainer" >
      {users.map((user) => {
        return (
          <Card style={{ width: '20em', height: "15em", textAlign:"center"}}>
            <Card.Body>
              <Card.Title><b>{user.username}</b></Card.Title>
              <Card.Text>
                <b>Pronouns:</b> {user.pronouns}
                <br /> <br/>
                <b>Bio:</b> {user.bio}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="success" href="chats/FighterGal123" size="sm">
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
