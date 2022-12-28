import github from "../Images/github.svg";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={github} alt="github" />
    </div>
  );
}
