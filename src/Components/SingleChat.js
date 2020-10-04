import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import './SingleChat.css'

function SingleChat({name, message, profilePic, timestamp}) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="single-chat">
        <Avatar className="single-chat-image" alt={name} src={profilePic} />
        <div className="single-chat-details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <div className="single-chat-timestamp">
          <p>{timestamp}</p>
        </div>
      </div>
    </Link>
  )
}

export default SingleChat
