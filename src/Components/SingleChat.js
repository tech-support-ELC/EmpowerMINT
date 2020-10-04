import React from 'react'
import EcoIcon from '@material-ui/icons/Eco'
import {Link} from 'react-router-dom'
import './SingleChat.css'

function SingleChat({name, message, timestamp}) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="single-chat">
        <EcoIcon className="single-chat-image" alt={name}  />
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
