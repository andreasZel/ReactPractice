import "../CSS/FullNote.css";
import Bold from "../Icons/B.svg";
import Hyperlink from "../Icons/Hyperlink.svg";
import Image from "../Icons/Image.svg";
import Italics from "../Icons/Italics.svg";
import List from "../Icons/list.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FullNote(props) {
  const BASE_URL = "https://localhost:7063/api/";
  const [Title, changeTitle] = useState();
  const [Date, changeDate] = useState();
  const [Description, changeDescription] = useState();

  const EditNote = async (props2) => {
    try {
      console.log("2   ", props2);
      const Note2 = {
        id: props2.id,
        timeOfCreation: "4:17:48 μμ",
        NoteTitle: Title,
        noteContent: Description,
        authorId: props2.AuthorId,
      };

      //console.log("Note:", Note2);
      //post data to server
      await axios.post(`${BASE_URL}Notes/EditNote`, Note2).then((response) => {
        //console.log(response);

        let tempid = JSON.parse(localStorage.getItem("selectedNote")).id;
        let noteId = JSON.parse(localStorage.getItem("selectedNote")).noteId;

        localStorage.setItem(
          "selectedNote",
          JSON.stringify({
            id: tempid,
            noteId: noteId,
            AuthorId: response.data.authorId,
            title: response.data.noteTitle,
            description: response.data.noteContent,
            creationTime: response.data.timeOfCreation,
          })
        );
      });

      //redirect to main page passing the username
      props.GetNotes();

      const hh = {
        title: Title,
        date: Date,
        description: Description,
      };
      props.updateFullNote(hh);

      return;
    } catch (e) {
      console.log("error :", e);
    }
  };

  useEffect(() => {
    changeTitle(props.title);
    changeDate(props.date);
    changeDescription(props.description);
  }, [props]);

  return (
    <div className="fullNote">
      <div className="TitleArea">
        <input
          id="NoteTitle"
          className="NoteDate"
          type="text"
          placeholder="1 / 12 / 23"
          value={Title}
          onChange={(e) => changeTitle(e.target.value)}
        />
        <input
          id="NoteDate"
          className="NoteT"
          type="text"
          placeholder="Meet 6pm"
          value={Date}
          onChange={(e) => changeDate(e.target.value)}
        />
      </div>
      <div className="EditBar">
        <button>
          <img src={Bold} />
        </button>
        <button>
          <img src={Hyperlink} />
        </button>
        <button>
          <img src={Image} />
        </button>
        <button>
          <img src={Italics} />
        </button>
        <button>
          <img src={List} />
        </button>
      </div>
      <textarea
        id="DescriptionArea"
        className="DescriptionArea"
        value={Description}
        onChange={(e) => changeDescription(e.target.value)}
      ></textarea>
      <button
        className="SaveNoteBtn"
        onClick={() => {
          //console.log("description", Description);
          EditNote({
            id: JSON.parse(localStorage.getItem("selectedNote")).noteId,
            NoteTitle: Title,
            NoteContent: Description,
            AuthorId: JSON.parse(localStorage.getItem("selectedNote")).AuthorId,
          });
        }}
      >
        Save Note
      </button>
    </div>
  );
}
