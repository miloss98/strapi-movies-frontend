import Movie from "./Movie";
import "./../styles/movies.css";
import { useContext } from "react";
import { MoviesContext } from "../context";

const Movies = () => {
  const { searchValue, filteredData, searchMovies } = useContext(MoviesContext);
  if (filteredData == "" && filteredData.length < 1) {
    return (
      <div className="no-movies-container">
        <div id="no-movies">
          <h4>No movies matched your criteria.</h4>
          <p className="try-again"> Please, try again. </p>
        </div>

        <section className="search-bar-container">
          <div className="search-div">
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Husky"
              ref={searchValue}
            ></input>
            <button className="search-btn" type="click" onClick={searchMovies}>
              Search
            </button>
          </div>
        </section>
      </div>
    );
  }
  return (
    <>
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

      <div className="movies-container">
        <Movie />
      </div>
    </>
  );
};

export default Movies;
