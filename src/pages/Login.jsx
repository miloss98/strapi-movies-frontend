import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../modules/authcontext";
import "./../styles/pages/login.css";

const Login = () => {
  const { msg, setUsername, setPassword, handleLogin } =
    useContext(AuthContext);
  return (
    <div className="login-wrapper">
      <section className="login-container">
        <div className="avatar-container"></div>
        <p className="info-msg"> {msg} </p>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="login-input-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input-field"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleLogin}>
            Login{" "}
          </button>
        </form>

        <p className="register-redirect">
          Don't have an account?{" "}
          <Link className="link-to-register" to="/register">
            {" "}
            Register{" "}
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
