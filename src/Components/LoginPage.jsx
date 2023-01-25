import "../CSS/LoginPage.css";
import { useState, useEffect } from "react";

export default function LoginPage(props) {
  const [UsernameLG, changeUsernameLG] = useState("");
  const [PasswordLG, changePasswordLG] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      window.location.replace(`http://localhost:3000`);
    }
  }, []);

  return (
    <div className="logInPage">
      <div className="logInContainer">
        <div className="logInHeader">
          <h1>
            <span>L</span>
            og In
          </h1>
        </div>
        <div className="loginInfo">
          <h2>Username: </h2>
          <input
            type="text"
            name="Username"
            value={UsernameLG}
            onChange={(e) => changeUsernameLG(e.target.value)}
          />
          <h2>Password: </h2>
          <input
            type="password"
            name="Password"
            value={PasswordLG}
            onChange={(e) => changePasswordLG(e.target.value)}
          />
          <span className="RegisterPrompt">
            <h4>Not a member?</h4>
            <h3>Register Now</h3>
          </span>
        </div>

        <button
          className="LogInBtn"
          onClick={() =>
            props.HandleLogIn({ Username: UsernameLG, Password: PasswordLG })
          }
        >
          Log In
        </button>
      </div>
    </div>
  );
}
