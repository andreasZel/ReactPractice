import { Link } from "react-router-dom";
import "../CSS/Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <span>N</span>otes
      </h1>
      <div className="buttons-box">
        <Link to="/LoginPage">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png" />
        </Link>

        <a href="">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
        </a>
      </div>
    </div>
  );
}
/*
<a href={props.NavLink}>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png" />
        </a>
*/
