import "../CSS/CreateNotePopUp.css";
import { useState } from "react";
import axios from "axios";

export default function CreateNotePopUp(props) {
  const [createNoteTitle, changeCRtitle] = useState("");
  const [createNoteDescription, changeCRdesc] = useState("");
  const BASE_URL = "https://localhost:7063/api/";

  async function CreateANote(props2) {
    const newNote = {
      timeOfCreation: "string",
      noteTitle: props2.Title,
      noteContent: props2.description,
      authorId: JSON.parse(localStorage.getItem("user")).userId.data.toString(),
    };

    // Create a default note for the new user
    await axios.post(`${BASE_URL}Notes/AddNote`, newNote).then((response) => {
      props.closePopUp();
      window.location.replace(`http://localhost:3000`);
    });
  }

  return (
    <div className="BlurredBG" style={props.style}>
      <div className="PopUpContainer">
        <div className="PopUpHeader">
          <h1 className="ContainerTitle"> Create a New Note </h1>
          <button className="PopUpCloseBtn" onClick={props.closePopUp}>
            X
          </button>
        </div>
        <h2 className="NoteTitle"> Title: </h2>
        <input
          type="text"
          className="TitleOfNote"
          defaultValue={createNoteTitle}
          onChange={(e) => changeCRtitle(e.target.value)}
        />
        <h2 className="NoteDescription"> Description: </h2>
        <textarea
          className="DescriptionOfNote"
          Value={createNoteDescription}
          onChange={(e) => changeCRdesc(e.target.value)}
        >
          {" "}
        </textarea>
        <button
          className="MakeNoteBtn"
          onClick={() =>
            CreateANote({
              Title: createNoteTitle,
              description: createNoteDescription,
            })
          }
        >
          {" "}
          Note!{" "}
        </button>
      </div>
    </div>
  );
}
