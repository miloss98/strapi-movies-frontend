import { useContext } from "react";
import { MoviesContext } from "../modules/context";
import { NavLink, useNavigate } from "react-router-dom";
import { Home } from "../pages/index";
import "./../styles/components/watchlist.css";
const Watchlist = () => {
  const { watchlist, removeFromWatchlist, alertBox, message } =
    useContext(MoviesContext);

  const navigate = useNavigate();

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
                  <button
                    className="wl-navigate"
                    onClick={() => navigate(`/movies/${id}`)}
                  >
                    <h3 id="wl-movie-title"> {attributes.name}</h3>
                  </button>
                </section>
                <section className="info">
                  <p>
                    Rating:{" "}
                    <span className="wl-data"> {attributes.rating} </span> / 10
                  </p>
                </section>
                <section className="info">
                  <p>
                    Year:{" "}
                    <span className="wl-data">{attributes.released} </span>
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
