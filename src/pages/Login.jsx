import { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "../components/FormField.jsx";

function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const update = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email === "" || login.password === "") setMessage("Please enter your email and password.");
    else setMessage("Signed in as " + login.email);
  };

  return (
    <section className="page login-wrap">
      <div className="login-side">
        <h2>Welcome Back</h2>
        <p>Sign in to track your edits and download finished photos.</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <FormField label="Email Address">
          <input name="email" type="email" value={login.email} onChange={update} />
        </FormField>
        <FormField label="Password">
          <input name="password" type="password" value={login.password} onChange={update} />
        </FormField>
        <button type="submit">Sign In</button>
        {message && <p className="success">{message}</p>}
        <p>New to LensArt? <Link to="/register">Create an account</Link></p>
      </form>
    </section>
  );
}

export default Login;
