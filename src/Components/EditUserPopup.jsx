import "../CSS/EditUserPopup.css";
import { useState } from "react";
import axios from "axios";

export default function EditUserPopup(props) {
  const [UserNameToChange, chUsername] = useState("");
  const [PasswordToChange, chPassword] = useState("");
  const BASE_URL = "https://localhost:7063/api/";

  async function EditUserCredentials(props2) {
    console.log(props2.password.length);
    if (props2.password.length < 8 && props2.password != null) return;
    console.log("props2");
    const User = {
      Id: JSON.parse(localStorage.getItem("user")).userId.data.id,
      userName: props2.userName,
      Email: "",
      password: props2.password,
    };

    await axios
      .post(`${BASE_URL}Users/EditUserCredentials`, User)
      .then((response) => {
        console.log(response);
        props.closePopUp();
      });
  }

  return (
    <div className="BlurredBG" style={props.styleOfUpdateUserPopUp}>
      <div className="PopUpContainerEditUser">
        <div className="PopUpHeaderEditUser">
          <h1 className="ContainerTitle"> Change User Credentials </h1>
          <button className="PopUpCloseBtnEditUser" onClick={props.closePopUp}>
            X
          </button>
        </div>
        <h2 className="NoteTitle2"> UserName: </h2>
        <input
          type="text"
          className="UserNameToChange"
          defaultValue={UserNameToChange}
          onChange={(e) => chUsername(e.target.value)}
        />
        <h2 className="NoteDescription2"> Password: </h2>
        <input
          className="PasswordToChange"
          Value={PasswordToChange}
          onChange={(e) => chPassword(e.target.value)}
        />
        <button
          className="changeUserBtn"
          onClick={() => {
            EditUserCredentials({
              userName: UserNameToChange,
              password: PasswordToChange,
            });
          }}
        >
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
}
