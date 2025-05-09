import React, { useState } from "react";

const Note = (props) => {
  const { toggleModal, note, setSelectedNote } = props;
  const [isHover, setIsHover] = useState(false);

  const noteClickHander = () => {
    toggleModal();
    setSelectedNote (note);
  };

  const hoverOverHandler = () => {
    setIsHover(true);
  };
  const hoverOutHandler = () => {
    setIsHover(false);
  };

  const deleteHandler = (event) => {
    event.stopPropagation();
    props.deleteNote(note.id);
  };
  
  return (
    <div
      className="note"
      id={props.id}
      onClick={noteClickHander}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-icons check-circle">check_circle</span>
      )}

      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Background options</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">New note with drawing</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler} >
          <span className="material-icons-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
