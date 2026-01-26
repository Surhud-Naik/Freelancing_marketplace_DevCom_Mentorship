import { Link } from "react-router-dom";
import "./login.css"

function Login() {
  return (
    <div className="container">
    <div className="card">
      <h1>Log in</h1>

      <input className="input" placeholder="Username" />
      <input className="input" type="password" placeholder="Password" />

      <button className="button">Log in</button>

     
      <p className="switch">
        Don’t have an account?{" "}
        <Link to="/register">Sign up</Link>
      </p>
    </div>
    </div>
  );
}

export default Login;