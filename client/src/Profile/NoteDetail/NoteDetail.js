import React from "react";
import "./NoteDetail.css";

import { Link } from "react-router-dom";

import { formatISO9075 } from "date-fns";
import { MdArrowBack } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

function NoteDetail() {
  return (
    <div className="note__details">
      <div className="noteDetails__container">
        <div className="noteDetails__links">
          <div className="noteDetils__linksLeft">
            <Link to="/NewNote">
              <span>
                <IoMdAdd />
              </span>
            </Link>
          </div>

          <Link className="back" to={"/profile"}>
            <MdArrowBack />
          </Link>
        </div>

        <></>
      </div>
    </div>
  );
}

export default NoteDetail;
