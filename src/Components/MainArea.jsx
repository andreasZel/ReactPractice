import NoteArea from "./NoteArea.jsx";
import { useState } from "react";
import "../CSS/MainArea.css";

export default function MainArea(props) {
  
  
  return (
    <div className="mainArea">
      <NoteArea
        GetNotes={props.GetNotes}
        closePopUp={props.closePopUp}
        notes={props.Notes}
        choosenNote={props.choosenNote}
        UpdateNotes={props.UpdateNotes}
        chooseNote={props.chooseNote}
        updateFullNote={props.updateFullNote}
        FullNoteArr={props.FullNoteArr}
        isLoading={props.isLoading}
      />
      {props.FullNoteArr}
    </div>
  );
}
