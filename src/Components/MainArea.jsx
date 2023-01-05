import NoteArea from "./NoteArea.jsx";
import FullNote from "./FullNote.jsx";
import "../CSS/MainArea.css";

export default function MainArea() {
    return(
        <div className="mainArea">
            <NoteArea/>
            <FullNote />
        </div>
    );
}