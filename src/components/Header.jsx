import { Navbar } from "./index";
import "./../styles/components/header.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../modules/context";

const Header = () => {
  const { searchMovies, searchValue, filteredData } = useContext(MoviesContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <section
          className="image-container"
          onClick={() => navigate("/")}
        ></section>
        <section className="search-bar-container">
          <div className="search-div">
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Inception"
              ref={searchValue}
            ></input>
            <button onClick={searchMovies} className="search-btn" type="click">
              Search
            </button>
          </div>
        </section>
        <section className="nav-container">
          <Navbar />
        </section>
      </div>
      <section className="search-results-container">
        {filteredData.map((movie) => {
          const { attributes, id } = movie;
          return <h1 key={id}> {attributes.name}</h1>;
        })}
      </section>
    </>
  );
};

export default Header;
