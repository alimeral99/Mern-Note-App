import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function EditNote() {
  const { noteDetail } = useSelector((state) => state.note);
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(noteDetail.title);
  const [note, setNote] = useState(noteDetail.note);

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
          <button>Update Note</button>
        </div>
      </form>
    </div>
  );
}

export default EditNote;
