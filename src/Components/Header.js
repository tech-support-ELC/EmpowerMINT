import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ChatIcon from '@material-ui/icons/Chat'
import IconButton from '@material-ui/core/IconButton'

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large" />
      </IconButton>
      <img className="header-logo" src={require('../images/pink_ribbon.png')} alt="pink-ribbon" />
      <IconButton>
        <ChatIcon className="header-icon" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header
