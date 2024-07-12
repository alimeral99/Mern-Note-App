import React, { useState, useEffect } from "react";
import { login } from "../redux/user/userApi";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/user/userSlice";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, successRedirect } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (successRedirect) {
      navigate("/profile");
    }
  }, [successRedirect, navigate, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if ((!email, !password)) return;

    login(dispatch, email, password);
  };

  return (
    <div className="login">
      <div className="login__container">
        {error && <p>{error}</p>}

        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
