import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Landing, ChatList, SignUp, Profile } from "./index";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        {/* <Route path="/chats" component={ChatList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} /> */}
      </Switch>
    </div>
  );
};

export default Routes;
