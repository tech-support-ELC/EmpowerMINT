import React from "react";

const SignUp = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="loginSignup">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label>Name displayed on your profile</label>
        <input name="name" type="text" placeholder="name" required />

        <label>How do you identify in your battle with breast cancer?</label>
        <select
          onChange={this.handleChange}
          value={this.state.type}
          name="type"
        >
          <option value="none">Required</option>
          <option value="survivor">Survivor</option>
          <option value="supporter">Supporter</option>
          <option value="warriorI">Warrior I</option>
          <option value="warriorII">Warrior II</option>
          <option value="warriorIII">Warrior III</option>
          <option value="warriorIV">Warrior IV</option>
        </select>

        {/* <label>Email</label>
        <input name="email" type="email" required />

        <label>Password</label>
        <input name="password" type="password" required /> */}

        <button type="submit">Sign up</button>
      </form>
      {/* <p>OR</p>

      <a target="_self" href="/auth/google">
        <i />
        <span>Sign up with Google</span>
      </a> */}
    </div>
  );
};

// const mapDispatch = (dispatch, ownProps) => ({
//   handleSubmit: (event) => {
//     event.preventDefault();
//     const firstName = event.target.firstName.value;
//     const lastName = event.target.lastName.value;
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const credentials = { firstName, lastName, email, password };
//     dispatch(signup(credentials, ownProps.history));
//   },
// });

// export default connect(null, mapDispatch)(Signup);

export default SignUp;
