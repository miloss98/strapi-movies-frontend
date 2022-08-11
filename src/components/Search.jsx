import { useContext } from "react";
import { MoviesContext } from "../modules/context";
import { HiOutlineSearch } from "react-icons/hi";
import "../styles/components/search.css";

const Search = () => {
  const { searchMovies, searchValue, filteredData } = useContext(MoviesContext);
  return (
    <>
      <div className="search-div">
        <input
          onChange={searchMovies}
          className="input-field"
          type="text"
          placeholder="e.g. Inception"
          ref={searchValue}
        ></input>
        <div style={{ height: "25px", width: "25px" }}>
          <HiOutlineSearch
            style={{ color: "white", height: "100%", width: "100%" }}
          />
        </div>
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

export default Search;
