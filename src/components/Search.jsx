import { useContext } from "react";
import { MoviesContext } from "../modules/context";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import "../styles/components/search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { searchMovies, searchValue, filteredData, search, setSearch } =
    useContext(MoviesContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="search-div">
        <input
          onChange={searchMovies}
          className="input-field"
          type="text"
          value={search}
          placeholder="e.g. Inception"
          ref={searchValue}
        />

        <div style={{ height: "25px", width: "25px" }}>
          {searchValue.current.value ? (
            <HiOutlineX
              onClick={() => setSearch("")}
              className="btn clear-btn"
            />
          ) : (
            <HiOutlineSearch
              className="btn"
              style={{ color: "white", height: "100%", width: "100%" }}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <section className="search-results-container">
          {filteredData.map((movie) => {
            const { attributes, id } = movie;
            return (
              <div
                onClick={() => navigate(`/movies/${id}`)}
                key={id}
                className="single-movie-suggestion-container"
              >
                <section id="suggestion-info-title">
                  <h4>{attributes.name}</h4>
                </section>
                <section className="suggestion-info">
                  <p> {attributes.rating}</p>
                </section>
                <section className="suggestion-info">
                  <p> {attributes.duration}</p>
                </section>
                <section className="suggestion-info">
                  <p> {attributes.released}</p>
                </section>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Search;
