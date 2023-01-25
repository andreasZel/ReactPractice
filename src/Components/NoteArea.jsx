import { useState, useEffect } from "react";
import "../CSS/NoteArea.css";
import Note from "./Note.jsx";
import axios from "axios";

export default function NoteArea(props) {
  const BASE_URL = "https://localhost:7063/api/";

  const [isLoading, setLoading] = useState(true);

  let NoteStyleNormal = {
    width: "310px",
    height: "310px",
    position: "relative",
    transition: "all 0.2s ease-in-out",
    backgroundColor: "#ffe55e",
  };

  let NoteStyleChoosen = {
    ...NoteStyleNormal,
    backgroundColor: "#ffac5e",
  };

  const GetNotes = async () => {
    try {
      const User = localStorage.getItem("user");
      var TmpNotes;
      const UserId = await axios.get(
        `${BASE_URL}Users/GetUserId?userName=${User}`
      );

      let id = UserId.data.pid.toString();

      //Get data from server
      await axios
        .get(`${BASE_URL}Notes/GetNotesOfUser?UserId=${id}`)
        .then((response) => {
          TmpNotes = response;
          setLoading(false);
        });

      //console.log(TmpNotes.data);
      let Tmp = TmpNotes.data.map((note, i) => {
        return (
          <Note
            key={i}
            id={i}
            createdDate={note.id.creationTime}
            chooseNote={props.chooseNote}
            idofchoosenNote={props.choosenNote.id}
            style={
              props.choosenNote.id == i ? NoteStyleNormal : NoteStyleChoosen
            }
            notetitle={note.noteTitle}
            notedescription={note.NoteContent}
          />
        );
      });

      props.UpdateNotes(Tmp);
      return;
    } catch (e) {
      if (e.response) {
        console.log("error");
        return;
      }
    }
  };

  useEffect(() => {
    props.chooseNote(JSON.parse(localStorage.getItem("selectedNote")));
    GetNotes();
  }, [localStorage.getItem("selectedNote")]);

  if (isLoading) {
    return <div></div>;
  }

  return <div className="NoteArea">{props.notes}</div>;
}
