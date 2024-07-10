import React from "react";
import "./List.css";

function List({ note }) {
  return (
    <div className="list" style={{ background: `${note.color}` }}>
      <h3 className="list__title">{note.title}</h3>
    </div>
  );
}

export default List;
