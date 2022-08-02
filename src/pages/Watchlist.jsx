import { useContext } from "react";
import { MoviesContext } from "../context";
import { NavLink } from "react-router-dom";
import Home from "./../pages/Home";
import "./../styles/watchlist.css";
const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(MoviesContext);

  if (watchlist.length === 0) {
    return (
      <div className="watchlist-wrapper">
        <div className="watchlist-container">
          <h1> Your watchlist is empty. </h1>
          <NavLink className="nav-find-movies" to="/" element={<Home />}>
            {" "}
            Add movies{" "}
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className="watchlist-container">
      {watchlist.map((movie) => {
        return movie.map((item) => {
          const { attributes, id } = item;
          return (
            <div key={id}>
              {attributes.name}
              <button onClick={(e) => removeFromWatchlist(id, e)}>
                Remove{" "}
              </button>
            </div>
          );
        });
      })}
    </div>
  );
};

export default Watchlist;
