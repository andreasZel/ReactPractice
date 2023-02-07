import "../CSS/DeleteNotePrompt.css";
import axios from "axios";

export default function DeleteNotePrompt(props) {
  const BASE_URL = "https://localhost:7063/api/";

  async function deleteNote() {
    const Note = {
      id: JSON.parse(localStorage.getItem("selectedNote")).noteId,
      timeOfCreation: "time",
      NoteTitle: "NoteTitle",
      noteContent: "NoteContent",
      authorId: JSON.parse(localStorage.getItem("selectedNote")).AuthorId,
    };

    //console.log(Note);

    await axios.post(`${BASE_URL}Notes/DeleteNote`, Note).then((response) => {
      console.log(response);
      window.location.replace(`http://localhost:3000`);
    });
  }

  return (
    <div className="BlurredBG" style={props.style}>
      <div className="PopUpContainer2">
        <h1 className="PromptText">
          {" "}
          Are you sure you want to delete this Note?
        </h1>
        <button className="YesPrompt" onClick={deleteNote}>
          Yes
        </button>
        <button className="NoPrompt" onClick={props.closePopUp}>
          No
        </button>
      </div>
    </div>
  );
}
