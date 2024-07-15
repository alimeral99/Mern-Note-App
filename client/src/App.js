import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import AddNote from "./Profile/AddNote/AddNote";
import NoteList from "./Profile/NoteList/NoteList";

import { auth } from "./redux/user/userApi";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NoteDetail from "./Profile/NoteDetail/NoteDetail";
import EditNote from "./Profile/EditNote/EditNote";
import PrivateRoutes from "./PrivateRoutes";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/notelist" element={<NoteList />} />
            <Route path="/notedetails/:id" element={<NoteDetail />} />
            <Route path="/editnote/:id" element={<EditNote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
