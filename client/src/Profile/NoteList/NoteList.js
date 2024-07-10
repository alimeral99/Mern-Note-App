import React, { useEffect } from "react";
import "./NoteList.css";
import List from "./List/List";
import { getNote } from "../../redux/note/noteApi";

import { useSelector, useDispatch } from "react-redux";

function NoteList() {
  const { currentNote, error } = useSelector((state) => state.note);
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      getNote(dispatch, currentUser.token);
    }
  }, [currentUser]);

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div className="noteList__container">
      {currentNote &&
        currentNote.map((note, id) => <List note={note} key={id} />)}
    </div>
  );
}

export default NoteList;
