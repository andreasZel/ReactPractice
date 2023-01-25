import "../CSS/RegisterPage.css";
import { useState, useEffect } from "react";

export default function RegisterPage(props) {
  const [Username, changeUsername] = useState("");
  const [Email, changeEmail] = useState("");
  const [Password, changePassword] = useState("");
  let Emailregex = new RegExp("[a-z0-9]+@[a-z]+[.][a-z]{2,3}$");

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      //window.location.replace(`http://localhost:3000`);
    }
  });

  return (
    <div className="registerPage">
      <div className="registerContainer">
        <div className="registerHeader">
          <h1>
            <span>R</span>
            egister
          </h1>
        </div>
        <div className="registerInfo">
          <h2>Username: </h2>
          <input
            type="text"
            value={Username}
            onChange={(e) => {
              changeUsername(e.target.value);
              props.changeUserName({ color: "#00A300" });
            }}
          />
          <h2>Password: </h2>
          <input
            type="password"
            value={Password}
            onChange={(e) => {
              changePassword(e.target.value);
              props.changePasswordStyle({
                color:
                  e.target.value.length > 8 ? "#00A300" : "rgb(172, 28, 9)",
              });
            }}
          />
          <h2>Email: </h2>
          <input
            type="email"
            value={Email}
            onChange={(e) => {
              changeEmail(e.target.value);
              props.changeEmailStyle({
                color: Emailregex.test(e.target.value)
                  ? "#00A300"
                  : "rgb(172, 28, 9)",
              });
            }}
          />
        </div>
        <button
          className="registerBtn"
          onClick={() =>
            props.RegisterAction({
              Username: Username,
              Email: Email,
              Password: Password,
            })
          }
        >
          {" "}
          Register{" "}
        </button>
        <div className="ErrorHandler">
          <ul>
            <li className="UsernameError" style={props.style}>
              Username is unique
            </li>
            <li className="EmailError" style={props.emailstyle}>
              Valid Email
            </li>
            <li className="PasswordError" style={props.passwordstyle}>
              Password is at least 8 characters long
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
