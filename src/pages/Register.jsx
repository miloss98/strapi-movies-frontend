import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, Navigate } from "react-router-dom";
import "./../styles/pages/register.css";
//graph ql
import { REGISTER } from "../modules/mutations";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [register] = useMutation(REGISTER);

  const resetFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleRegister = async () => {
    console.log("username", username);
    console.log("email", email);
    console.log("password", password);
    try {
      const {
        data: {
          register: { jwt, user },
        },
      } = await register({
        variables: {
          username: username,
          email: email,
          password: password,
        },
      });
      setMsg("Registration successful!");
      setTimeout(() => {
        setMsg("");
      }, "2000");
      resetFields();
      console.log(jwt, "jwt");
      console.log(user, "user");
    } catch (error) {
      setMsg("Registration failed, try again!");
      setTimeout(() => {
        setMsg("");
      }, "2000");
      resetFields();
    }
  };

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
            {" "}
            Login{" "}
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
