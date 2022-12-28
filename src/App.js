import "./App.css";
import About from "./Components/About";
import Info from "./Components/Info";
import Footer from "./Components/Footer";
import StudentCard from "./Components/StudentCard";
import { StudentClass } from "./ClassOfStudents.js";

// use the map function to get the data and display them as
// StudentCard components
export default function App() {
  let Students = StudentClass.map((current_student) => {
    return (
      <StudentCard
        StudentName={current_student.Student_Name}
        StudentAM={current_student.Student_AM}
        Class={current_student.Class}
      />
    );
  });

  console.log(Students);

  return (
    <div className="App">
      <Info />
      <h2>Students</h2>
      {Students}
      <About />
      <Footer />
    </div>
  );
}
