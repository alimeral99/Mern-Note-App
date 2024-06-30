import React from "react";
import "./Profile.css";

import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) return <p>Loading</p>;

  return <div>welcome to your profile {currentUser.username}</div>;
}

export default Profile;
