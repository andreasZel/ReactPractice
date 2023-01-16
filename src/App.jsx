import React, { useState } from "react";
import "./App.css";
import "./CSS/AddNoteBtn.css";
import Header from "./Components/Header.jsx";
import MainArea from "./Components/MainArea.jsx";
import AddNoteBtn from "./Components/AddNoteBtn.jsx";
import CreateNotePopUp from "./Components/CreateNotePopUp.jsx";

function App() {
  let [styleOfNotePopUp, changeVisibility] = useState({
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto",
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100%",
    background: "rgba(73, 73, 73, 0.66)",
    zIndex: "3",
    contentVisibility: "hidden",
    visibility: "hidden",
  });

  function OpenCloseNotePopUp() {
    changeVisibility((previousVisibility) => {
      return {
        ...previousVisibility,
        contentVisibility:
          previousVisibility.contentVisibility === "hidden"
            ? "visible"
            : "hidden",
        visibility:
          previousVisibility.visibility === "hidden" ? "visible" : "hidden",
      };
    });
  }

  return (
    <div className="app">
      <Header NavLink="/loginPage" />
      <MainArea />
      <AddNoteBtn openPopUp={() => OpenCloseNotePopUp()} />
      <CreateNotePopUp
        closePopUp={() => OpenCloseNotePopUp()}
        style={styleOfNotePopUp}
      />
    </div>
  );
}

export default App;
