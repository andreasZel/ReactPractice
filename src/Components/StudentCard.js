export default function StudentCard(props) {
  return (
    <div className="StudentCard">
      <h1>{props.StudentName}</h1>
      <h1>{props.StudentAM}</h1>
      <h1>{props.Class}</h1>
    </div>
  );
}
