import { Search, Navbar } from "./index";
import "./../styles/components/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <section
        className="image-container"
        onClick={() => navigate("/")}
      ></section>
      <section className="search-bar-container">
        <Search />
      </section>
      <section className="nav-container">
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
