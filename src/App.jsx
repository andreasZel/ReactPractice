import "./App.css";
import "./CSS/AddNoteBtn.css";
import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import RegisterPage from "./Components/RegisterPage";
import { useState } from "react";
import axios from "axios";

function App() {
  const BASE_URL = "https://localhost:7063/api/";
  const [ErrorStyle, changeErrorStyle] = useState({
    color: "#595959",
  });
  const [ErrorEmailStyle, changeEmailErrorStyle] = useState({
    color: "#595959",
  });
  const [ErrorPasswordStyle, changePasswordErrorStyle] = useState({
    color: "#595959",
  });

  const HandleLogIn = async (props) => {
    try {
      const User = {
        userName: props.Username,
        email: "asdadsa",
        password: props.Password,
      };

      //post data to server
      await axios.post(`${BASE_URL}Users/LogInUser`, User).then((response) => {
        //redirect to main page passing the username
        localStorage.setItem(
          "user",
          JSON.stringify({ username: props.Username, userId: response })
        );

        console.log(JSON.parse(localStorage.getItem("user")));
        localStorage.setItem(
          "selectedNote",
          JSON.stringify({
            id: "0",
            noteId: "",
            AuthorId: "",
            title: "",
            description: "",
            creationTime: "",
          })
        );
        window.location.replace(`http://localhost:3000/`);
      });

      return;
    } catch (e) {
      if (e.response.status === 22222) {
        console.log("error wrong username or pass");
        return;
      }
    }
  };

  const HandleRegister = async (props) => {
    let errorcode = false;
    let Emailregex = new RegExp("[a-z0-9]+@[a-z]+[.][a-z]{2,3}$");
    try {
      errorcode =
        Emailregex.test(props.Email) && props.Password.length > 8
          ? false
          : true;

      if (errorcode === true) {
        console.log("error email or pass");
        return;
      }
      //console.log("23213213");
      const User = {
        userName: props.Username,
        Email: props.Email,
        password: props.Password,
      };

      //post data to server
      await axios.post(`${BASE_URL}Users/AddUser`, User).then((response) => {
        //redirect to main page passing the username
        localStorage.setItem(
          "user",
          JSON.stringify({ username: props.Username, userId: response })
        );
      });

      console.log(JSON.parse(localStorage.getItem("user")).userId.data.id);

      const newNote = {
        timeOfCreation: "string",
        noteTitle: "Edit Your First Note!",
        noteContent: "Edit Your Note",
        authorId: JSON.parse(localStorage.getItem("user")).userId.data.id,
      };

      // Create a default note for the new user
      await axios.post(`${BASE_URL}Notes/AddNote`, newNote).then((response) => {
        //redirect to main page passing the username
      });
      localStorage.setItem(
        "selectedNote",
        JSON.stringify({
          id: "0",
          noteId: "",
          AuthorId: "",
          title: "",
          description: "",
          creationTime: "",
        })
      );
      window.location.replace(`http://localhost:3000/`);
      return;
    } catch (e) {
      if (e.response.status === 11111) {
        console.log("User Already Exist!");
        changeErrorStyle({
          color: "rgb(172, 28, 9)",
        });
      }
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path="/LoginPage"
          element={<LoginPage HandleLogIn={HandleLogIn} />}
        />
        <Route
          exact
          path="/RegisterPage"
          element={
            <RegisterPage
              style={ErrorStyle}
              emailstyle={ErrorEmailStyle}
              passwordstyle={ErrorPasswordStyle}
              changeUserName={changeErrorStyle}
              changePasswordStyle={changePasswordErrorStyle}
              changeEmailStyle={changeEmailErrorStyle}
              RegisterAction={HandleRegister}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
