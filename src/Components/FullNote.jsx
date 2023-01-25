import "../CSS/FullNote.css";
import Bold from "../Icons/B.svg";
import Hyperlink from "../Icons/Hyperlink.svg";
import Image from "../Icons/Image.svg";
import Italics from "../Icons/Italics.svg";
import List from "../Icons/list.svg";

export default function FullNote(props) {

  function findChoosenNote(){
    
  }

  return (
    <div className="fullNote">
      <div className="TitleArea">
        <input
          className="NoteDate"
          type="text"
          placeholder="1 / 12 / 23"
          defaultValue=""
        />
        <input
          className="NoteT"
          type="text"
          placeholder="Meet 6pm"
          defaultValue=""
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
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></textarea>
      <button className="SaveNoteBtn">Save Note</button>
    </div>
  );
}
