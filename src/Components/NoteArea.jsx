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
      //! old method========
      /*
      const User = JSON.parse(localStorage.getItem("user")).username;
     
      
      const UserId = await axios.get(
        `${BASE_URL}Users/GetUserId?userName=${User}`
      );
      
      let id = UserId.data;
      */
      //!====================
      //Get data from server
      var TmpNotes;

      await axios
        .get(
          `${BASE_URL}Notes/GetNotesOfUser?UserId=${
            JSON.parse(localStorage.getItem("user")).userId.data
          }`
        )
        .then((response) => {
          TmpNotes = response;
          //console.log(TmpNotes);
          setLoading(false);
        });

      let Tmp = TmpNotes.data.map((note, i) => {
        return (
          <Note
            key={i}
            id={i}
            authorId={note.authorId}
            noteId={note.id}
            N={props.notes}
            createdDate={note.timeOfCreation}
            chooseNote={props.chooseNote}
            idofchoosenNote={props.choosenNote.id}
            style={
              props.choosenNote.id == i ? NoteStyleNormal : NoteStyleChoosen
            }
            notetitle={note.noteTitle}
            notedescription={note.noteContent}
          />
        );
      });
      props.UpdateNotes(Tmp);

      localStorage.setItem(
        "selectedNote",
        JSON.stringify({
          id: 0,
          noteId: TmpNotes[0].data.id,
          AuthorId: TmpNotes[0].data.authorId,
          title: TmpNotes[0].data.noteTitle,
          description: TmpNotes[0].data.noteContent,
          creationTime: TmpNotes[0].data.timeOfCreation,
        })
      );

      return;
    } catch (e) {
      if (e.response) {
        console.log("error");
        return;
      }
    }
  };

  useEffect(() => {
    GetNotes();
    props.chooseNote(JSON.parse(localStorage.getItem("selectedNote")));
    props.updateFullNote({
      title: JSON.parse(localStorage.getItem("selectedNote")).title,
      date: JSON.parse(localStorage.getItem("selectedNote")).creationTime.slice(
        0,
        10
      ),
      description: JSON.parse(localStorage.getItem("selectedNote")).description,
    });
    //console.log(props.FullNoteArr)
  }, [localStorage.getItem("selectedNote")]);

  if (isLoading) {
    return <div></div>;
  }

  return <div className="NoteArea">{props.notes}</div>;
}
