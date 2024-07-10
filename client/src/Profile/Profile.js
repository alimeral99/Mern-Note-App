import React, { useState, useEffect } from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NoteList from "./NoteList/NoteList";
import { searchNote } from "../redux/note/noteApi";

import { useDispatch, useSelector } from "react-redux";
import { GrSearch } from "react-icons/gr";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!search) return;

    searchNote(dispatch, search, currentUser.token);
  }, [search]);

  if (!currentUser) return <p>Loading</p>;

  return (
    <div className="profile">
      <ProfileInfo />

      <div className="profile__body">
        <div className="searchNote__container">
          <GrSearch />
          <input
            type="text"
            className="search__note"
            placeholder="Search Note"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <NoteList />
      </div>
    </div>
  );
}

export default Profile;
