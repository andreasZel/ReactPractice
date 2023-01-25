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
      alt={props.notedescription}
      onClick={() => {
        props.chooseNote({
          id: ref.current.id,
          description: ref.current.alt,
        });

        localStorage.setItem(
          "selectedNote",
          JSON.stringify({
            id: ref.current.id,
            description: ref.current.alt,
          })
        );
      }}
    >
      <div className="date-box">
        <h1> {props.createdDate.toString().slice(0, 10)} </h1>
      </div>
      <h1> {props.notetitle} </h1>
    </div>
  );
}
