import { useContext } from "react";
import { MoviesContext } from "../modules/context";
import { NavLink } from "react-router-dom";
import Home from "./../pages/Home";
import "./../styles/pages/watchlist.css";
const Watchlist = () => {
  const { watchlist, removeFromWatchlist, alertBox, message } =
    useContext(MoviesContext);

  if (watchlist.length === 0) {
    return (
      <div className="watchlist-wrapper">
        <div className="empty-watchlist-container">
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
    <div className="watchlist-wrapper">
      {alertBox && (
        <div className="alert-box-rm">
          <p className="alert-message-rm">{message}</p>
        </div>
      )}
      <div className="watchlist-container">
        <h2> Your watchlist </h2>
        {watchlist.map((movie) => {
          return movie.map((item) => {
            const { attributes, id } = item;
            return (
              <div className="single-wl-movie-container" key={id}>
                <section className="info">
                  <h3 id="wl-movie-title"> {attributes.name}</h3>
                </section>
                <section className="info">
                  <p>
                    Rating: <span className="data"> {attributes.rating} </span>{" "}
                    / 10
                  </p>
                </section>
                <section className="info">
                  <p>
                    Year: <span className="data">{attributes.released} </span>
                  </p>
                </section>
                <section className="rmv-container">
                  <button
                    className="remove-button"
                    onClick={(e) => removeFromWatchlist(id, e)}
                  >
                    Remove{" "}
                  </button>
                </section>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Watchlist;
