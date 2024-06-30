import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";

import { auth } from "./redux/user/userApi";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!jwt) return;

    auth(dispatch, jwt);
  }, [auth]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<h1>hello world</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
