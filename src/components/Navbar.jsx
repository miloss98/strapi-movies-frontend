import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../modules/authcontext";
import { Home, Profile, Login, About } from "./../pages/index";
import "./../styles/components/navbar.css";
const Navbar = () => {
  const { user, isLoggedIn } = useContext(AuthContext);

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
            <button className="logout-btn"> </button>
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
