import "./../styles/components/movie.css";
import { useContext } from "react";
import { MoviesContext } from "./../modules/context";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:1337";

const Movie = () => {
  const { allMovies, addToWatchlist, alertBox, message } =
    useContext(MoviesContext);
  const navigate = useNavigate();

  return (
    <>
      {alertBox && (
        <div className="alert-box-add">
          <p className="alert-message-add"> {message}</p>
        </div>
      )}

      {allMovies.map((movie) => {
        const { attributes, id } = movie;

        return (
          <div key={id} className="movie-card">
            <section className="movie-title-container">
              <h1 className="movie-title"> {attributes?.name} </h1>
            </section>
            <section className="movie-img-container">
              <img
                className="movie-img"
                src={url + attributes?.image?.data?.attributes?.url}
                alt={attributes?.name}
              />
            </section>
            <section className="read-more-container">
              <button
                onClick={() => navigate(`/movies/${id}`)}
                className="read-more"
              >
                Read more
              </button>
              <button
                onClick={(e) => addToWatchlist(id, e)}
                className="add-to-watchlist"
              >
                {" "}
                Add to watchlist
              </button>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Movie;
