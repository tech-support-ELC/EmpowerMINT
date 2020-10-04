import React, { useState } from "react";
import EcoIcon from "@material-ui/icons/Eco";
import { Modal } from "react-bootstrap";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "FighterGal123",
      message: "Hey! How are you?",
    },
    {
      name: "FighterGal123",
      message: "Hope you're well",
    },
    // { WILL DO THE RESPONSE IN THE DEMO
    //   message: 'Thanks Sarah! How are you?'
    // }
  ]);

  function handleSend(e) {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  }

  return (
    <div className="chatScreen">
      <p id="status"> EncourageMINT from {messages[0].name.toUpperCase()} </p>

      <div id="chatContainer">
        {messages.map((message) =>
          message.name ? (
            <div className="chatScreen-message">
              <EcoIcon className="chatScreen-avatar" alt={message.name} />
              <p className="chatScreen-text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen-message">
              <p className="chatScreen-textUser">{message.message}</p>
            </div>
          )
        )}
      </div>

      <form className="chatScreen-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen-inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button onClick={handleSend} className="chatScreen-btn">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
