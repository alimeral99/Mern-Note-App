import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <a href="#" className="header__logo">
        Note App
      </a>

      <a href="#" className="links">
        Login
      </a>

      <a href="#" className="links">
        Sign Up
      </a>
    </div>
  );
}

export default Header;
