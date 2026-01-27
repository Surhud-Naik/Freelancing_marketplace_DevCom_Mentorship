import { Link } from "react-router-dom";
import "./register.css"

function Register() {
  return (
    <div className="register-container">
    <div className="card">
      <h1>Create an account</h1>

      <input className="input" placeholder="Create username" />
      <input className="input" type="password" placeholder="Create password" />

      <button className="button">Sign up</button>

    
      <p className="switch">
        Already have an account?{" "}
        <Link to="/">Log in</Link>
      </p>
    </div>
 </div>
  );
}

export default Register;