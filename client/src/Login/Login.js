import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form>
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

          <button type="submit" className="login__signInButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
