import React, { useState, useEffect } from "react";
import "./NoteList.css";
import List from "./List/List";
import { getNote } from "../../redux/note/noteApi";

import { useSelector, useDispatch } from "react-redux";
import { MdOutlineRestartAlt } from "react-icons/md";
import Loading from "../../Loading/Loading";

function NoteList() {
  const { currentNote, error } = useSelector((state) => state.note);
  const { currentUser, userToken } = useSelector((state) => state.user);

  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      getNote(dispatch, userToken);
    }
  }, [currentUser, toggle]);

  if (!currentUser) return <Loading />;

  if (!currentNote) return <Loading />;

  return (
    <div className="noteList__container">
      <MdOutlineRestartAlt
        className="restart__icon"
        onClick={() => setToggle(!toggle)}
      />

      {currentNote &&
        currentNote.map((note, id) => <List note={note} key={id} />)}
    </div>
  );
}

export default NoteList;
