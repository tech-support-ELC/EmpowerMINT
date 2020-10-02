import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Landing, ChatList, SignUp, Profile, LogIn, PrivateRoute } from "./index";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute exact path="/home" component={Home} />
        {/* <Route path="/chats" component={ChatList} />
        <Route path="/profile" component={Profile} /> */}
      </div>
    </Router>
  );
};

export default Routes;
