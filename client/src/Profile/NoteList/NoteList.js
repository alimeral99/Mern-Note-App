import React from "react";
import "./NoteList.css";
import List from "./List/List";

function NoteList() {
  return (
    <div className="noteList__container">
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default NoteList;
