import React from "react";
import "./ProfileInfo.css";

import { useSelector } from "react-redux";

function ProfileInfo() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="profile__info">
      <h3 className="profile__username">
        Welcome {""}
        {currentUser?.username}
      </h3>
      <div className="test">
        <div className="note" style={{ backgroundColor: "#AEDEF2" }}></div>
        <div className="note" style={{ backgroundColor: "#CCBED7" }}></div>
      </div>{" "}
    </div>
  );
}

export default ProfileInfo;
