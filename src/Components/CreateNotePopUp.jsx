import "../CSS/CreateNotePopUp.css";

export default function CreateNotePopUp(props) {
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
        <input type="text" className="TitleOfNote" />
        <h2 className="NoteDescription"> Description: </h2>
        <textarea className="DescriptionOfNote"> </textarea>
        <button className="MakeNoteBtn"> Note! </button>
      </div>
    </div>
  );
}
