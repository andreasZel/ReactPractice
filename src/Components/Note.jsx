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
      noteDescription={props.notedescription}
      noteCreationTime={props.createdDate}
      titleofNote={props.notetitle}
      onClick={() => {
        props.chooseNote({
          id: ref.current.id,
          description: ref.current.getAttribute("noteDescription"),
          creationTime: ref.current.getAttribute("noteCreationTime"),
        });

        localStorage.setItem(
          "selectedNote",
          JSON.stringify({
            id: ref.current.id,
            title: ref.current.getAttribute("titleofNote"),
            description: ref.current.getAttribute("noteDescription"),
            creationTime: ref.current.getAttribute("noteCreationTime"),
          })
        );
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
