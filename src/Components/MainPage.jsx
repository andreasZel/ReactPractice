import Header from "./Header.jsx";
import MainArea from "./MainArea.jsx";
import AddNoteBtn from "./AddNoteBtn.jsx";
import CreateNotePopUp from "./CreateNotePopUp.jsx";
import React, { useState, useEffect } from "react";
import DeleteNotePrompt from "./DeleteNotePrompt.jsx";
import Note from "./Note.jsx";
import FullNote from "./FullNote.jsx";
import EditUserPopup from "./EditUserPopup.jsx";
import axios from "axios";

export default function MainPage() {
  const BASE_URL = "https://localhost:7063/api/";
  const [isLoading, setLoading] = useState(true);
  const [Notes, UpdateNotes] = useState([{}]);
  const [choosenNote, chooseNote] = useState({
    id: "0",
    noteId: "",
    AuthorId: "",
    description: "",
    creationTime: "",
  });
  const [FullNoteArr, upadeFullNoteArr] = useState(<FullNote />);

  function updateFullNote(props) {
    //console.log("myprops ", props);
    //console.log("FullNoteArr ", props.title);
    upadeFullNoteArr(
      <FullNote
        GetNotes={GetNotes}
        chooseNote={chooseNote}
        title={props.title}
        date={props.date}
        description={props.description}
        updateFullNote={updateFullNote}
      />
    );
    //console.log("FullNoteArr After", FullNoteArr);
  }

  let [styleOfNotePopUp, changeVisibility] = useState({
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto",
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100%",
    background: "rgba(73, 73, 73, 0.66)",
    zIndex: "3",
    contentVisibility: "hidden",
    visibility: "hidden",
  });

  let [styleOfDeleteNotePopUp, changeVisibilityDel] = useState({
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto",
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100%",
    background: "rgba(73, 73, 73, 0.66)",
    zIndex: "3",
    contentVisibility: "hidden",
    visibility: "hidden",
  });

  let [styleOfUpdateUserPopUp, changeVisibilityEditUser] = useState({
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto",
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100%",
    background: "rgba(73, 73, 73, 0.66)",
    zIndex: "6",
    contentVisibility: "hidden",
    visibility: "hidden",
  });

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

  function promptToDelete() {
    alert("You are sure you want to delete this note?");
  }

  function OpenCloseNotePopUp() {
    changeVisibility((previousVisibility) => {
      return {
        ...previousVisibility,
        contentVisibility:
          previousVisibility.contentVisibility === "hidden"
            ? "visible"
            : "hidden",
        visibility:
          previousVisibility.visibility === "hidden" ? "visible" : "hidden",
      };
    });
  }

  const GetNotes = async () => {
    try {
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
            FullNoteArr={FullNoteArr}
            updateFullNote={updateFullNote}
            GetNotes={GetNotes}
            key={i}
            id={i}
            closePopUp={OpenCloseDeleteNotePopUp}
            authorId={note.authorId}
            promptToDelete={promptToDelete}
            noteId={note.id}
            N={Notes}
            createdDate={note.timeOfCreation}
            chooseNote={() => chooseNote}
            idofchoosenNote={choosenNote}
            style={
              JSON.parse(localStorage.getItem("selectedNote")).id == i
                ? NoteStyleChoosen
                : NoteStyleNormal
            }
            notetitle={note.noteTitle}
            notedescription={note.noteContent}
            UpdateNotes={UpdateNotes}
          />
        );
      });
      //console.log(Tmp);

      UpdateNotes(Tmp);

      const hh = {
        title: JSON.parse(localStorage.getItem("selectedNote")).title,
        date: JSON.parse(
          localStorage.getItem("selectedNote")
        ).creationTime.slice(0, 10),
        description: JSON.parse(localStorage.getItem("selectedNote"))
          .description,
      };
      updateFullNote(hh);
      const oo = {
        id: 0,
        noteId: TmpNotes.data[0].id,
        AuthorId: TmpNotes.data[0].authorId,
        title: TmpNotes.data[0].noteTitle,
        description: TmpNotes.data[0].noteContent,
        creationTime: TmpNotes.data[0].timeOfCreation,
      };
      chooseNote(oo);

      return;
    } catch (e) {
      if (e.response) {
        console.log("error");
        return;
      }
    }
  };

  function OpenCloseDeleteNotePopUp() {
    changeVisibilityDel((previousVisibility) => {
      return {
        ...previousVisibility,
        contentVisibility:
          previousVisibility.contentVisibility === "hidden"
            ? "visible"
            : "hidden",
        visibility:
          previousVisibility.visibility === "hidden" ? "visible" : "hidden",
      };
    });

    GetNotes();
  }

  function OpenCloseUpdateUserPopUp() {
    changeVisibilityEditUser((previousVisibility) => {
      return {
        ...previousVisibility,
        contentVisibility:
          previousVisibility.contentVisibility === "hidden"
            ? "visible"
            : "hidden",
        visibility:
          previousVisibility.visibility === "hidden" ? "visible" : "hidden",
      };
    });

    GetNotes();
  }

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.replace(`http://localhost:3000/LoginPage`);
    }

    GetNotes();
  }, []);

  return (
    <div className="mainPage">
      <Header openPopUp={OpenCloseUpdateUserPopUp} />
      <MainArea
        Notes={Notes}
        GetNotes={GetNotes}
        closePopUp={OpenCloseDeleteNotePopUp}
        isLoading={isLoading}
        UpdateNotes={UpdateNotes}
        choosenNote={choosenNote}
        chooseNote={chooseNote}
        updateFullNote={updateFullNote}
        FullNoteArr={FullNoteArr}
      />
      <AddNoteBtn openPopUp={OpenCloseNotePopUp} />
      <CreateNotePopUp
        closePopUp={OpenCloseNotePopUp}
        style={styleOfNotePopUp}
        GetNotes={GetNotes}
      />
      <DeleteNotePrompt
        closePopUp={OpenCloseDeleteNotePopUp}
        style={styleOfDeleteNotePopUp}
        GetNotes={GetNotes}
      />
      <EditUserPopup
        styleOfUpdateUserPopUp={styleOfUpdateUserPopUp}
        changeVisibilityEditUser={changeVisibilityEditUser}
        closePopUp={OpenCloseUpdateUserPopUp}
      />
    </div>
  );
}
