import Movie from "./Movie";
import "./../styles/movies.css";
const Movies = () => {
  return (
    <>
      <section className="search-bar-container">
        <div className="search-div">
          <input
            className="input-field"
            type="text"
            placeholder="e.g. Inception"
            // ref={searchValue}
          ></input>
          <button className="search-btn" type="click">
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
