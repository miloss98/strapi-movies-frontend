import { Link } from "react-router-dom";
import "./../styles/pages/register.css";
import { AuthContext } from "../modules/authcontext";
import { useContext } from "react";

const Register = () => {
  const {
    msg,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  } = useContext(AuthContext);

  return (
    <div className="register-wrapper">
      <section className="register-container">
        <div className="register-avatar-container"></div>
        <p className="info-msg"> {msg} </p>
        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="register-input-field"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="register-input-field"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="register-input-field"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-btn" onClick={handleRegister}>
            Register{" "}
          </button>
        </form>

        <p className="login-redirect">
          Already have an account?{" "}
          <Link className="link-to-login" to="/login">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
