import "./App.css";
import "./CSS/AddNoteBtn.css";
import Header from "./Components/Header.jsx";
import MainArea from "./Components/MainArea.jsx";
import AddNoteBtn from "./Components/AddNoteBtn.jsx";
import CreateNotePopUp from "./Components/CreateNotePopUp.jsx";
import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
