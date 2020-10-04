import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'Sarah',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      message: 'Hey! How are you?'
    },
    {
      name: 'Sarah',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      message: "Hope you're well"
    },
    {
      message: 'Thanks Sarah! How are you?'
    }
  ])

  return (
    <div className="chatScreen">
      <p> YOU MATCHED WITH {messages[0].name.toUpperCase()} ON 10/03/20 </p>
      {messages.map(
        (message) =>
          message.name ? (
            <div className="chatScreen-message">
              <Avatar className="chatScreen-avatar" alt={message.name} src={message.image} />
              <p className="chatScreen-text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen-message">
              <p className="chatScreen-textUser">{message.message}</p>
            </div>
          )
      )}

      <form className="chatScreen-input">
        <input className="chatScreen-inputField" placeholder="Type a message..." type="text" />
        <button className="chatScreen-btn">SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen
