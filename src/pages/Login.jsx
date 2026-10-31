import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "../components/FormField.jsx";

function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const update = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setError("");
    setLoggedIn(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email === "" || login.password === "") {
      setError("Please enter your email and password.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login.email)) {
      setError("Enter a valid email address.");
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <section className="page">
      <div className="login-wrap">
        <div className="login-side">
          <h2>Welcome Back</h2>
          <p>Sign in to track your edits, download finished photos and book new sessions.</p>
          <ul>
            <li>Track every order</li>
            <li>Download in full resolution</li>
            <li>Priority support for members</li>
          </ul>
        </div>

        <div className="login-form">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit} noValidate>
            <FormField label="Email Address" name="lemail">
              <input id="lemail" name="email" type="email" value={login.email} onChange={update} placeholder="Enter your email" />
            </FormField>
            <FormField label="Password" name="lpassword">
              <input id="lpassword" name="password" type="password" value={login.password} onChange={update} placeholder="Enter your password" />
            </FormField>
            {error && <small className="form-error">{error}</small>}
            <button type="submit">Sign In</button>
            {loggedIn && <p className="success">Signed in as {login.email}</p>}
          </form>
          <p className="switch">
            New to LensArt? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
