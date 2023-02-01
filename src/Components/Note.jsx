import "../CSS/Note.css";
import { useRef } from "react";

export default function Note(props) {
  const ref = useRef(null);

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
        localStorage.setItem(
          "selectedNote",
          JSON.stringify({
            id: ref.current.id,
            noteId: ref.current.getAttribute('noteid'),
            AuthorId: ref.current.getAttribute('authorid'),
            title: ref.current.getAttribute("titleofNote"),
            description: ref.current.getAttribute("noteDescription"),
            creationTime: ref.current.getAttribute("noteCreationTime"),
          })
        );

        props.chooseNote({
          id: ref.current.id,
          noteId: ref.current.getAttribute('noteid'),
          AuthorId: ref.current.getAttribute('Authorid'),
          description: ref.current.getAttribute("noteDescription"),
          creationTime: ref.current.getAttribute("noteCreationTime"),
        });

        //console.log(JSON.parse(localStorage.getItem("selectedNote")));
      }}
    >
      <div className="date-box">
        <h1> {props.createdDate.toString().slice(0, 10)} </h1>
      </div>
      <h1> {props.notetitle} </h1>
    </div>
  );
}
