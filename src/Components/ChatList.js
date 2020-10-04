import React from 'react'
import SingleChat from './SingleChat'

function ChatList() {
  return (
    <div className="chat-list">
      <SingleChat
        name="Sarah"
        message="Hey! How are you?"
        timestamp="25 minutes ago"
        profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <SingleChat
        name="Tom"
        message="Today was so crazy!!"
        timestamp="50 minutes ago"
        profilePic="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <SingleChat
        name="Sydney"
        message="The sun is shinning brigtly today and I thought of you"
        timestamp="1 day ago"
        profilePic="https://images.unsplash.com/photo-1519975258993-60b42d1c2ee2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <SingleChat
        name="Kim"
        message="I'm ready when you are!"
        timestamp="1 week ago"
        profilePic="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80"
      />
    </div>
  )
}

export default ChatList
