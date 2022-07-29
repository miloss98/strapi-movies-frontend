import { NavLink } from "react-router-dom";
import About from "./../pages/About";
import Home from "./../pages/Home";
import "./../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="links-container">
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
    </div>
  );
};

export default Navbar;
