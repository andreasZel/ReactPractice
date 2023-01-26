import "../CSS/FullNote.css";
import Bold from "../Icons/B.svg";
import Hyperlink from "../Icons/Hyperlink.svg";
import Image from "../Icons/Image.svg";
import Italics from "../Icons/Italics.svg";
import List from "../Icons/list.svg";

export default function FullNote(props) {
  //console.log(JSON.parse(localStorage.getItem("selectedNote")).title);
  return (
    <div className="fullNote">
      <div className="TitleArea">
        <input
          className="NoteDate"
          type="text"
          placeholder="1 / 12 / 23"
          defaultValue={props.title}
        />
        <input
          className="NoteT"
          type="text"
          placeholder="Meet 6pm"
          defaultValue={props.date}
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
        className="DescriptionArea"
        defaultValue={props.description}
      ></textarea>
      <button className="SaveNoteBtn">Save Note</button>
    </div>
  );
}
