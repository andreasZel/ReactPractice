import PlusIcon from "../Icons/PlusIcon.svg";

export default function AddNoteBtn(props) {
  return (
    <button className="addNoteBtn">
      <img src={PlusIcon} onClick={props.openPopUp} alt="plusIcon" />
    </button>
  );
}
