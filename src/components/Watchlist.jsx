import { useContext } from "react";
import { MoviesContext } from "../modules/context";
import { NavLink } from "react-router-dom";
import { Home } from "../pages/index";
import "./../styles/components/watchlist.css";
const Watchlist = () => {
  const { watchlist, removeFromWatchlist, alertBox, message } =
    useContext(MoviesContext);

  if (watchlist.length === 0) {
    return (
      <div className="empty-watchlist-container">
        <h4> Your watchlist is empty. </h4>
        <NavLink className="nav-find-movies" to="/" element={<Home />}>
          {" "}
          Add movies{" "}
        </NavLink>
      </div>
    );
  }
  return (
    <>
      {alertBox && (
        <div className="alert-box-rm">
          <p className="alert-message-rm">{message}</p>
        </div>
      )}
      <div className="watchlist-container">
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
    </>
  );
};

export default Watchlist;
