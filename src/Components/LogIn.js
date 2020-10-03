/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import * as firebase from "firebase/app";
import app from "../firebase";

const LogIn = () => {
  return (
    <div>
      <h1>Log In</h1>
      <button>Log In</button>
    </div>
  );
};

export default LogIn;
