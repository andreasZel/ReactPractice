import "./App.css";
import "./CSS/AddNoteBtn.css";
import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
