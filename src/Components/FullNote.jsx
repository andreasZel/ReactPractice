import "../CSS/FullNote.css";
import Bold from "../Icons/B.svg";
import Hyperlink from "../Icons/Hyperlink.svg";
import Image from "../Icons/Image.svg";
import Italics from "../Icons/Italics.svg";
import List from "../Icons/list.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FullNote(props) {
  //console.log(JSON.parse(localStorage.getItem("selectedNote")).title);
  const BASE_URL = "https://localhost:7063/api/";
  const [Title, changeTitle] = useState(props.title);
  const [Date, changeDate] = useState(props.date);
  const [Description, changeDescription] = useState(props.description);

  const EditNote = async (props) => {
    try {
      //console.log(props.NoteTitle);
      const Note2 = {
        id: props.id,
        timeOfCreation: "4:17:48 μμ",
        NoteTitle: props.NoteTitle,
        noteContent: props.NoteContent,
        authorId: props.AuthorId,
      };

      //console.log("Note:", Note2);
      //post data to server
      await axios.post(`${BASE_URL}Notes/EditNote`, Note2).then((response) => {
        //console.log(response);
      });
      //redirect to main page passing the username

      return;
    } catch (e) {
      console.log("error :", e);
    }
  };

  function changeNoteContent(props) {
    EditNote(props);
    window.location.replace(`http://localhost:3000`);
  }

  useEffect(() => {
    //console.log("tsa"); //debugging purposes
    changeTitle(props.title);
    changeDate(props.date);
    changeDescription(props.description);
  }, [props.title]);

  return (
    <div className="fullNote">
      <div className="TitleArea">
        <input
          id="NoteTitle"
          className="NoteDate"
          type="text"
          placeholder="1 / 12 / 23"
          defaultValue={Title}
          onChange={(e) => changeTitle(e.target.value)}
        />
        <input
          id="NoteDate"
          className="NoteT"
          type="text"
          placeholder="Meet 6pm"
          defaultValue={Date}
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
        defaultValue={Description}
        onChange={(e) => changeDescription(e.target.value)}
      ></textarea>
      <button
        className="SaveNoteBtn"
        onClick={() =>
          changeNoteContent({
            id: JSON.parse(localStorage.getItem("selectedNote")).noteId,
            NoteTitle: Title,
            NoteContent: Description,
            AuthorId: JSON.parse(localStorage.getItem("selectedNote")).AuthorId,
          })
        }
      >
        Save Note
      </button>
    </div>
  );
}
