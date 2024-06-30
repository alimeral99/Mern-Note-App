import "./App.css";
import Header from "./Header/Header";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
