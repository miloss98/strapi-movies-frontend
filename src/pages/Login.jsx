import axios from "axios";
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

  // const login = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post("http://localhost:1337/api/auth/local", {
  //       identifier: username,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log("User profile", response.data.user);
  //       console.log("User token", response.data.jwt);
  //       setUser(response.data.user);
  //       setIsLoggedIn(true);
  //       navigate("/profile");
  //     })
  //     .catch((error) => {
  //       setMsg("Email / password is incorrect!");
  //       setIsLoggedIn(false);
  //       setTimeout(() => {
  //         setMsg("");
  //       }, "2000");
  //     });
  // };

  // const [login] = useMutation(LOGIN);

  // login({ variables: { identifier: username, password: password } });

  return (
    <div className="login-wrapper">
      <section className="login-container">
        <div className="avatar-container"></div>
        <p> {msg} </p>
        <form className="form">
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
          <button className="login-btn">Login </button>
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
