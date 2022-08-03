import { NavLink } from "react-router-dom";
import { Home, Watchlist, About } from "./../pages/index";
import "./../styles/components/navbar.css";
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
