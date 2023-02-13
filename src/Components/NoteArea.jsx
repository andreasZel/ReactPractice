import "../CSS/NoteArea.css";

export default function NoteArea(props) {
  if (props.isLoading) {
    return <div></div>;
  }

  return <div className="NoteArea">{props.notes}</div>;
}
