import React from "react";
import "./List.css";

import { useNavigate } from "react-router-dom";

function List({ note }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/notedetails/${note._id}`)}
      className="list"
      style={{ background: `${note.color}` }}
    >
      <h3 className="list__title">{note.title}</h3>
    </div>
  );
}

export default List;
