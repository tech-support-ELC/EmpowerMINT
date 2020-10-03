import { EventAvailableOutlined } from "@material-ui/icons";
import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "../firebase";

const SignUp = ({ history }) => {

  const [pronouns, setPronouns] = useState('')

  const handleChange = (event) => {
    setPronouns(event.target.value)
  }

  const handleSignUp = useCallback(
    async (event) => {

      event.preventDefault();

      const { email, password, username } = event.target.elements;

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        const UID = app.auth().currentUser.uid; //GETS USER ID FROM AUTHENTICAITON
        app
          .database()
          .ref("users/" + UID)
          .set({ 
            username: username.value, 
            pronouns: pronouns,
            contacts: []
            // type: ,
            // bio: , 
          });
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          email
          <input name="email" type="email" placeholder="Email" />
        </label>

        <label>
          password
          <input name="password" type="password" placeholder="Password" />
        </label>

        <label>
          username
          <input name="username" type="username" placeholder="Username" />
        </label>

        <div>
          <label>pronouns</label>

          <select name = "prounouns" value={pronouns} onChange = {handleChange} >
            <option value = "she/hers">she/hers</option>
            <option value = "him/his">him/his</option>
            <option value = "they/them">they/them</option>
          </select>
        </div>

        <div>
          <label>I am a:</label>

          <select>
            <option>Survivor</option>
            <option>Supporter</option>
            <option>Warrior - Stage 1</option>
            <option>Warrior - Stage 2</option>
            <option>Warrior - Stage 3</option>
            <option>Warrior - Stage 4</option>
          </select>
        </div>

        <div>
          <label>
            Bio/Interests
            <input
              name="Bio/Interests"
              type="text"
              placeholder="Bio/Interests"
            />
          </label>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
