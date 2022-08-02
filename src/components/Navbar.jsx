import { NavLink } from "react-router-dom";
import About from "./../pages/About";
import Watchlist from "../pages/Watchlist";
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
        to="/watchlist"
        element={<Watchlist />}
      >
        {" "}
        Watchlist
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
