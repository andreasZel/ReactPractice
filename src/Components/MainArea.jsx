import NoteArea from "./NoteArea.jsx";
import FullNote from "./FullNote.jsx";
import { useState } from "react";
import "../CSS/MainArea.css";

export default function MainArea() {
  const [Notes, UpdateNotes] = useState([{}]);
  const [choosenNote, chooseNote] = useState({
    id: "",
    description: "",
  });

  return (
    <div className="mainArea">
      <NoteArea
        notes={Notes}
        choosenNote={choosenNote}
        UpdateNotes={UpdateNotes}
        chooseNote={chooseNote}
      />
      <FullNote
        notes={Notes}
        choosenNote={choosenNote}
        UpdateNotes={UpdateNotes}
        chooseNote={chooseNote}
      />
    </div>
  );
}
