import React from "react";
import "./ProfileInfo.css";

import { VscAdd } from "react-icons/vsc";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProfileInfo() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="profile__info">
      <h3 className="profile__username">
        Welcome {""}
        {currentUser?.username}
      </h3>
      <div className="test">
        <div className="note" style={{ backgroundColor: "#CCBED7" }}>
          <Link to={"/addnote"}>
            <VscAdd className="add__icon" />
          </Link>{" "}
        </div>
        <div className="note" style={{ backgroundColor: "#AEDEF2" }}></div>
      </div>{" "}
    </div>
  );
}

export default ProfileInfo;
