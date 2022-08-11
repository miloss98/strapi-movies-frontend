import { Navbar } from "./index";
import "./../styles/components/header.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../modules/context";

const Header = () => {
  const { searchMovies, searchValue } = useContext(MoviesContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <section
        className="image-container"
        onClick={() => navigate("/")}
      ></section>
      <section className="search-bar-container">
        <div className="search-div">
          <input
            onChange={searchMovies}
            className="input-field"
            type="text"
            placeholder="e.g. Inception"
            ref={searchValue}
          ></input>
          <button onChange={searchMovies} className="search-btn" type="click">
            Search
          </button>
        </div>
      </section>
      <section className="nav-container">
        <Navbar />
      </section>
    </div>
  );
};

export default Header;
