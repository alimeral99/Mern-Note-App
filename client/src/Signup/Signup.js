import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(password, email, username);

  return (
    <div className="signup">
      <div className="login">
        <div className="login__container">
          <h1>Sign Up</h1>
          <form>
            <h5>Name</h5>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="plase enter your name"
            />

            <h5>E-mail</h5>
            <input
              type="text"
              placeholder="plase enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              placeholder="plase enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="Signup__Button">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
