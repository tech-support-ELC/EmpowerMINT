import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home, Landing, ChatList, SignUp, Profile, LogIn, PrivateRoute, ChatScreen} from './index'

const Routes = () => {
  return (
    <div id="main">
      <div id="bg" />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/landing" component={Landing} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route path="/chats/:person" component={ChatScreen} />
        <Route path="/chats" component={ChatList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  )
}

export default Routes
