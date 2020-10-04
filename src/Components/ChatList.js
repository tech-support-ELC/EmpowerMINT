import React from 'react'
import SingleChat from './SingleChat'

function ChatList() {
  return (
    <div className="chat-list">
      <SingleChat
        name="FighterGal123"
        message="Hope you're well"
        timestamp="25 minutes ago"
      />
      <SingleChat
        name="SparkleJoy"
        message="Today, I'm feeling a bit down :("
        timestamp="50 minutes ago"
      />
      <SingleChat
        name="CookieMonster"
        message="The sun is shinning brigtly today and I thought of you"
        timestamp="1 day ago"
      />
      <SingleChat
        name="DeluxeVegan"
        message="Hope you're having a great day, I'm here for you."
        timestamp="1 week ago"
      />
    </div>
  )
}

export default ChatList
