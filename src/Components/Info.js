import myImage from "../Images/hi.jpg";
import envelope from "../Images/envelope-fill.svg";
import linkedin from "../Images/linkedin.svg";

export default function Info() {
  return (
    <div className="info">
      <img src={myImage} className="infoPicture" alt="infoImage" />
      <h1>Andreas Zelios</h1>
      <h2>Fullstack Developer</h2>
      <small className="Small">Info Website</small>

      <div className="Buttons">
        <button className="EmailButton">
          <img src={envelope} alt="envelope" />
          Email
        </button>
        <button className="LinkedinButton">
          <img src={linkedin} alt="linkedin" />
          Linkedin
        </button>
      </div>
    </div>
  );
}
