import React from "react";
import {Card,Button} from "react-bootstrap"

const db = [
  {
    username: "TESTYTESTTEST",
    bio: "IM DUMMY DATA", 
    pronouns:"he/him"
  }, 
  {
    username: "TESTYTESTTEST1",
    bio: "IM DUMMY DATA",
    pronouns:"she/hers"
  },
  {
    username: "TESTYTESTTEST2",
    bio: "IM DUMMY DATA",
    pronouns:"they/them"
  },
  
]

function Home() {
  const users = db

  return (
    <div style={{display: 'flex', flexDirection: 'row', }}>
      {users.map((user)=>{
          return (
              <Card className="text-center" >
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                  {user.pronouns}
                  <br/>
                  {user.bio}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="success" href="chats" size="sm">Match</Button>
              </Card.Footer>
            </Card>
          )
      })}
    </div>
  );
}

export default Home;
