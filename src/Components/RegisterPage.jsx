import "../CSS/RegisterPage.css";

export default function RegisterPage() {
  return (
    <div className="registerPage">
      <div className="registerContainer">
        <div className="registerHeader">
          <h1>
            <span>R</span>
            egister
          </h1>
        </div>
        <div className="registerInfo">
          <h2>Username: </h2>
          <input type="text" />
          <h2>Password: </h2>
          <input type="password" />
          <h2>Email: </h2>
          <input type="email" />
        </div>
        <button className="registerBtn"> Register </button>
        <div className="ErrorHandler">
            <ul>
                <li>Username is unique</li>
                <li>Valid Email</li>
                <li>Password is at least 8 characters long</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
