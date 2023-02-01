import NoteArea from "./NoteArea.jsx";
import FullNote from "./FullNote.jsx";
import { useState } from "react";
import "../CSS/MainArea.css";

export default function MainArea() {
  const [Notes, UpdateNotes] = useState([{}]);
  const [choosenNote, chooseNote] = useState({
    id: "",
    description: "",
    creationTime: "",
  });

  const [FullNoteArr, upadeFullNoteArr] = useState(<FullNote />);

  function updateFullNote(props) {
    upadeFullNoteArr();
    //console.log("myprops ", props.title);
    //console.log("FullNoteArr ", FullNoteArr);
    upadeFullNoteArr(
      <FullNote
        chooseNote={props.chooseNote}
        title={props.title}
        date={props.date}
        description={props.description}
      />
    );
    //console.log("FullNoteArr After", FullNoteArr);
  }

  return (
    <div className="mainArea">
      <NoteArea
        notes={Notes}
        choosenNote={choosenNote}
        UpdateNotes={UpdateNotes}
        chooseNote={chooseNote}
        updateFullNote={updateFullNote}
        FullNoteArr={FullNoteArr}
      />
      {FullNoteArr}
    </div>
  );
}
