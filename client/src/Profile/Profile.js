import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) return <p>Loading</p>;

  return (
    <div className="profile">
      <ProfileInfo />
    </div>
  );
}

export default Profile;
