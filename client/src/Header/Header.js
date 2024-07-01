import React from "react";
import "./Header.css";
import { logout } from "../redux/user/userApi";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
            <a href="/login" className="links" onClick={handleLogout}>
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
