import "./../styles/components/movie.css";
import { useContext } from "react";
import { MoviesContext } from "./../modules/context";
import { useNavigate } from "react-router-dom";
//
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const url = "http://localhost:1337";

const Movie = () => {
  const { filteredData, addToWatchlist, alertBox, message } =
    useContext(MoviesContext);
  const navigate = useNavigate();

  return (
    <>
      {alertBox && (
        <div className="alert-box-add">
          <p className="alert-message-add"> {message}</p>
        </div>
      )}

      {filteredData.map((movie) => {
        const { attributes, id } = movie;

        return (
          <div key={id} className="movie-card">
            <section className="movie-title-container">
              <h1 className="movie-title"> {attributes?.name} </h1>
            </section>
            <img
              className="movie-img"
              src={url + attributes?.image?.data?.attributes?.url}
              alt={attributes?.name}
            />
            <section className="genres-container">
              <p>
                <span> Genre: </span>
                {attributes?.categories?.data.map((category) => {
                  const { attributes, id } = category;
                  return (
                    <span className="genre" key={id}>
                      {attributes?.name}{" "}
                    </span>
                  );
                })}
              </p>
            </section>
            <section className="other-info-container">
              <p>
                Released: <span> {attributes?.released} </span>
              </p>
              <p>
                Duration: <span> {attributes?.duration}</span>
              </p>
              <div style={{ height: "50px", width: "50px" }}>
                <CircularProgressbar
                  value={attributes?.rating}
                  minValue={1}
                  maxValue={10}
                  text={attributes?.rating}
                />
              </div>
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
