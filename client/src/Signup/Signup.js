import React, { useState, useEffect } from "react";
import "./Signup.css";

import { register } from "../redux/user/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/user/userSlice";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { successRedirect, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (successRedirect) {
      navigate("/login");
    }
    dispatch(resetUser());
  }, [successRedirect, navigate, dispatch]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if ((!email, !username, !password)) return;

    const userData = {
      email,
      username,
      password,
    };

    register(dispatch, userData);
  };

  return (
    <div className="signup">
      <div className="login">
        <div className="login__container">
          {error && <p>{error}</p>}

          <h1>Sign Up</h1>
          <form onSubmit={handleRegister}>
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
