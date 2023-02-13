import "../CSS/Note.css";
import { useRef, useEffect } from "react";

export default function Note(props) {
  const ref = useRef(null);

  const note_close_btn =
    JSON.parse(localStorage.getItem("selectedNote")).noteId == props.noteId ? (
      <button className="Close_Note_Btn" onClick={() => props.closePopUp()}>
        X
      </button>
    ) : (
      <div></div>
    );

  return (
    <div
      className="note"
      id={props.id}
      ref={ref}
      style={props.style}
      noteId={props.noteId}
      AuthorId={props.authorId}
      noteDescription={props.notedescription}
      noteCreationTime={props.createdDate}
      titleofNote={props.notetitle}
      onClick={() => {
        //props.GetNotes();

        localStorage.setItem(
          "selectedNote",
          JSON.stringify({
            id: ref.current.id,
            noteId: ref.current.getAttribute("noteid"),
            AuthorId: ref.current.getAttribute("authorid"),
            title: ref.current.getAttribute("titleofNote"),
            description: ref.current.getAttribute("noteDescription"),
            creationTime: ref.current.getAttribute("noteCreationTime"),
          })
        );

        const oo = {
          id: ref.current.id,
          noteId: ref.current.getAttribute("noteid"),
          AuthorId: ref.current.getAttribute("Authorid"),
          description: ref.current.getAttribute("noteDescription"),
          creationTime: ref.current.getAttribute("noteCreationTime"),
        };
        props.chooseNote(oo);

        props.GetNotes();
      }}
    >
      <div className="date-box">
        {note_close_btn}
        <h1> {props.createdDate.toString()} </h1>
      </div>
      <h1> {props.notetitle} </h1>
    </div>
  );
}
