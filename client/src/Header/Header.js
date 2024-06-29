import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="header__logo " to={"/"}>
        Note App
      </Link>

      <div className="header__right">
        <Link href="/" className="links">
          Login
        </Link>

        <Link href="/" className="links">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Header;
