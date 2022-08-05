import { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../modules/authcontext";
import { Home, Profile, Login, About } from "./../pages/index";
import "./../styles/components/navbar.css";
const Navbar = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    setUser("");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="links-container">
      {user ? (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link")}
            to="/"
            element={<Home />}
          >
            {" "}
            Home
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link")}
            to="/about"
            element={<About />}
          >
            About{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link")}
            to="/profile"
            element={<Profile />}
          >
            {" "}
            Profile
          </NavLink>{" "}
          <div className="logout-container">
            <button onClick={logout} className="logout-btn">
              {" "}
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link")}
            to="/"
            element={<Home />}
          >
            {" "}
            Home
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link")}
            to="/about"
            element={<About />}
          >
            About{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link")}
            to="/login"
            element={<Login />}
          >
            {" "}
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
