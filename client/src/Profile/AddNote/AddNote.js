import React, { useState } from "react";
import "./AddNote.css";

import { MdArrowBack } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

function AddNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="addNote">
      <form className="note__form">
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
