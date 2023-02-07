import Header from "./Header.jsx";
import MainArea from "./MainArea.jsx";
import AddNoteBtn from "./AddNoteBtn.jsx";
import CreateNotePopUp from "./CreateNotePopUp.jsx";
import React, { useState, useEffect } from "react";
import DeleteNotePrompt from "./DeleteNotePrompt.jsx";

export default function MainPage() {
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

  let [styleOfDeleteNotePopUp, changeVisibilityDel] = useState({
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto",
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

  function OpenCloseDeleteNotePopUp() {
    changeVisibilityDel((previousVisibility) => {
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

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.replace(`http://localhost:3000/LoginPage`);
    }
  }, []);

  return (
    <div className="mainPage">
      <Header />
      <MainArea closePopUp={() => OpenCloseDeleteNotePopUp()} />
      <AddNoteBtn openPopUp={() => OpenCloseNotePopUp()} />
      <CreateNotePopUp
        closePopUp={() => OpenCloseNotePopUp()}
        style={styleOfNotePopUp}
      />
      <DeleteNotePrompt
        closePopUp={() => OpenCloseDeleteNotePopUp()}
        style={styleOfDeleteNotePopUp}
      />
    </div>
  );
}
