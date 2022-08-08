import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../modules/authcontext";
import "./../styles/pages/login.css";
//graphql
import { useMutation } from "@apollo/client";
import { LOGIN } from "../modules/mutations";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");
  const { setUser, setIsLoggedIn } = useContext(AuthContext);

  let navigate = useNavigate();

  const [login] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      await login({ variables: { identifier: username, password: password } });
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (error) {
      setMsg("Email / password is incorrect!");
      setIsLoggedIn(false);
      setTimeout(() => {
        setMsg("");
      }, "2000");
    }
  };

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
