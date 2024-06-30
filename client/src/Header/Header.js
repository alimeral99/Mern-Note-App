import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="header">
      <Link className="header__logo " to={"/"}>
        Note App
      </Link>

      <div className="header__right">
        {currentUser ? (
          <>
            <Link to="/profile" className="links">
              Profile
            </Link>
            <a href="/login" className="links">
              Logout
            </a>
          </>
        ) : (
          <>
            <Link className="links" to="/login">
              Login
            </Link>
            <Link className="links" to="/signUp">
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
