import { Link } from "react-router-dom";
import "../CSS/Header.css";

export default function Header(props) {
  function LogOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("selectedNote");
    console.log(localStorage.getItem("user"));
  }

  return (
    <div className="header">
      <h1>
        <span>N</span>otes
      </h1>
      <div className="buttons-box">
        <Link to="/LoginPage" onClick={LogOut}>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png" />
        </Link>

        <button onClick={props.openPopUp}>
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
        </button>
      </div>
    </div>
  );
}
