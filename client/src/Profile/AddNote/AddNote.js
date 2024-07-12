import React, { useState, useEffect } from "react";
import "./AddNote.css";
import { addNote } from "../../redux/note/noteApi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { resetNote } from "../../redux/note/noteSlice";

function AddNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, userToken } = useSelector((state) => state.user);
  const { succesRedirect } = useSelector((state) => state.note);

  useEffect(() => {
    if (succesRedirect) {
      navigate("/profile");
    }
    dispatch(resetNote());
  }, [succesRedirect, navigate, dispatch]);

  const handleNote = (e) => {
    e.preventDefault();

    if ((!title, !note)) return;

    const contentNote = {
      title,
      note,
    };

    addNote(dispatch, contentNote, userToken);
  };

  return (
    <div className="addNote">
      <form className="note__form" onSubmit={handleNote}>
        <div className="newNote__backLink">
          <Link to={"/profile"}>
            <MdArrowBack />
          </Link>
        </div>

        <input
          type="text"
          placeholder="plase enter a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          style={{ resize: "none" }}
          cols="25"
          rows="25"
          placeholder="plase enter a note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <div className="note__button__container">
          <button>Add Note</button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
