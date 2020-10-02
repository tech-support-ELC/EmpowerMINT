import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ChatIcon from '@material-ui/icons/Chat'

function Header() {
  return (
    <div className="header">
      <PersonIcon />
      <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png" alt="tinder-logo" />
      <ChatIcon />
    </div>
  )
}

export default Header
