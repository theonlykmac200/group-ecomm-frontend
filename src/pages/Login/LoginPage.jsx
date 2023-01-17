import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/signupService";

function LoginPage({ handleSignupAndLogin, updateMessage }) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormState((prevState) => ({
      // Using ES2015 Computed Property Names
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(formState);
      handleSignupAndLogin();
      navigate("/", { replace: true });
    } catch (err) {
      // Use something other than an alert in production code
      alert("Invalid Credentials!");
    }
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
          <legend>Sign In</legend>
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            placeholder="Email"
            value={formState.email}
            name="email"
            onChange={handleChange}
          />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            value={formState.password}
            name="password"
            onChange={handleChange}
          />
          <div className="form-controls">
            <button>Log In</button>
          </div>
        </form>
      </div>
      <p className="new">New to Amazon?</p>
      <p className="login">
        <Link className="login-link" to="/signup">
          Create your Amazon account
        </Link>
      </p>
    </>
  );
}

export default LoginPage;
