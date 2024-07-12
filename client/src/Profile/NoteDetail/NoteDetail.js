import React, { useEffect } from "react";
import "./NoteDetail.css";
import { getNoteDetails, deleteNote } from "../../redux/note/noteApi";

import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatISO9075 } from "date-fns";
import { MdArrowBack } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { noteDetailSuccess } from "../../redux/note/noteSlice";

function NoteDetail() {
  const { noteDetail } = useSelector((state) => state.note);
  const { currentUser, userToken } = useSelector((state) => state.user);

  console.log(noteDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getNoteDetails(dispatch, id, userToken);
  }, [getNoteDetails, id]);

  //Clear data when detached from component
  useEffect(() => {
    dispatch(noteDetailSuccess(null));
  }, [id]);

  const deleteHandler = (id) => {
    deleteNote(id, userToken);
    navigate("/profile");
  };

  if (!noteDetail) return <p>Loading</p>;

  return (
    <div className="note__details">
      <div
        className="noteDetails__container"
        style={{ background: `${noteDetail.color}` }}
      >
        <div className="noteDetails__links">
          <div className="noteDetils__linksLeft">
            <Link to="/addNote">
              <span>
                <IoMdAdd />
              </span>
            </Link>

            <span>
              <IoMdTrash onClick={() => deleteHandler(noteDetail._id)} />
            </span>

            <Link to={`/editNote/${id}`}>
              <span>
                <MdEdit />
              </span>
            </Link>
          </div>

          <Link className="back" to={"/profile"}>
            <MdArrowBack />
          </Link>
        </div>

        <>
          <time className="noteDetails__time">
            {formatISO9075(new Date(noteDetail.updatedAt))}
          </time>
          <h2 className="noteDetails__title">{noteDetail.title}</h2>
          <p className="noteDetails__content">{noteDetail.note}</p>
        </>
      </div>
    </div>
  );
}

export default NoteDetail;
