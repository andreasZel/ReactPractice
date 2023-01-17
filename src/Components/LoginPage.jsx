import "../CSS/LoginPage.css";

export default function LoginPage() {
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
          <input type="text" />
          <h2>Password: </h2>
          <input type="password" />
          <span className="RegisterPrompt">
            <h4>Not a member?</h4>
            <h3>Register Now</h3>
          </span>
        </div>

        <button className="LogInBtn"> Log In </button>
      </div>
    </div>
  );
}
