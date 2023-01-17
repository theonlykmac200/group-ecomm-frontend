import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/signupService";

function SignupPage(props) {
  const [messageState, setMessageState] = useState({
    msg: "",
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const navigate = useNavigate();

  function updateMessage(msg) {
    setMessageState({ message: msg });
  }

  function handleChange(e) {
    updateMessage("");
    setFormState((prevState) => ({
      // Using ES2015 Computed Property Names
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      signup(formState);
      props.handleSignupAndLogIn();
      navigate("/login", { replace: true });
    } catch (err) {
      // Invalid user data (probably duplicate email)
      updateMessage(err.message);
    }
  }

  // returns true only if all the required fields are complete and password is confirmed
  function validForm() {
    return (
      formState.name &&
      formState.email &&
      formState.password === formState.passwordConf
    );
  }

  return (
    <>
      <img
        className="auth-img"
        src="https://i.imgur.com/5c0O9WH.png"
        alt="amazon logo"
      />
      <div className="auth-form">
        <form onSubmit={handleSubmit}>
          <legend>Sign Up</legend>
          <label for="name">Your name</label>
          <br />
          <input
            type="text"
            value={formState.name}
            name="name"
            onChange={handleChange}
          />
          <br />
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            value={formState.email}
            name="email"
            onChange={handleChange}
          />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            type="password"
            value={formState.password}
            name="password"
            onChange={handleChange}
          />
          <br />
          <label for="passwordConf">Confirm Password</label>
          <br />
          <input
            type="password"
            value={formState.passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
          <div className="form-controls">
            <button id="signup-btn" disabled={!validForm()}>
              Sign Up
            </button>
          </div>
        </form>
        <p>{messageState.msg}</p>
      </div>
      <p className="login">
        Already have an account?{" "}
        <Link className="login-link" to="/login">
          Sign in{" "}
        </Link>
      </p>
    </>
  );
}

export default SignupPage;
