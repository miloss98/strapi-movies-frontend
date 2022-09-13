import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER, LOGIN } from "../modules/mutations";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  let navigate = useNavigate();

  //user data
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");

  const resetFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  //register
  const [register] = useMutation(REGISTER);

  const handleRegister = async () => {
    try {
      await register({
        variables: {
          username: username,
          email: email,
          password: password,
        },
      });
      setMsg("Registration successful, logging in...!");
      setTimeout(() => {
        setMsg("");
      }, "2000");
      setUser({
        name: username,
        username: email,
      });
      navigate("/profile");
      resetFields();
    } catch (error) {
      setMsg("Registration failed, try again!");
      setTimeout(() => {
        setMsg("");
      }, "2000");
      resetFields();
    }
  };

  //login
  const [login] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const data = await login({
        variables: { identifier: username, password: password },
      });
      setUser({
        name: data?.data?.login?.user?.username,
        username: data?.data?.login?.user?.email,
        jwt: data?.data?.login?.jwt,
      });
      navigate("/profile");
    } catch (error) {
      setMsg("Email / password is incorrect!");
      setTimeout(() => {
        setMsg("");
      }, "2000");
      resetFields();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        msg,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        handleRegister,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
