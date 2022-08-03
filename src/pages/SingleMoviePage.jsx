import { useContext } from "react";
import { MoviesContext } from "../modules/context";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/pages/singlemovie.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useQuery } from "@apollo/client";
import { SINGLEMOVIE } from "./../modules/queries";

const SingleMoviePage = () => {
  const { addToWatchlist, alertBox, message } = useContext(MoviesContext);
  const { movieID } = useParams();
  const navigate = useNavigate();

  const url = "http://localhost:1337";

  const { loading, error, data } = useQuery(SINGLEMOVIE, {
    variables: { id: movieID },
  });
  if (loading) return <p> Loading,..</p>;
  if (error) return <p> Error! </p>;

  return (
    <div className="single-movie-wrapper">
      <div className="single-movie-container">
        {alertBox && (
          <div className="alert-box-add">
            <p className="alert-message-add"> {message}</p>
          </div>
        )}
        <section className="movie-header">
          <div className="left-side">
            {" "}
            <HiArrowNarrowLeft
              className="go-back"
              onClick={() => navigate(-1)}
            />{" "}
            <h1 id="title"> {data.movie.data.attributes.name} </h1>
          </div>

          <p>
            IMDb rating:{" "}
            <span className="rating">{data.movie.data.attributes.rating}</span>/
            10
          </p>
        </section>
        <section className="main-info">
          <img
            className="cover-image"
            src={url + data.movie.data.attributes?.image?.data?.attributes?.url}
            alt="movie-img"
          />
          <div className="right-side">
            <p className="description">
              {data.movie.data.attributes.description}
            </p>
            <p className="actors">
              Actors:{" "}
              <span className="data">{data.movie.data.attributes.actors}</span>
            </p>
            <p>
              Genre:
              {data.movie.data.attributes?.categories?.data.map((category) => {
                const { attributes, id } = category;
                return (
                  <span className="data" key={id}>
                    {" "}
                    {attributes?.name}
                  </span>
                );
              })}
            </p>
            <p>
              Director:{" "}
              <span className="data">
                {data.movie.data?.attributes?.director}
              </span>
            </p>
            <p>
              Released:
              <span className="data">
                {" "}
                {data.movie.data.attributes?.released}
              </span>
            </p>
            <p>
              Duration:{" "}
              <span className="data">
                {data.movie.data?.attributes?.duration}
              </span>
            </p>
            <button
              onClick={(e) => addToWatchlist(data.movie.data?.data.id, e)}
              id="add-to-watchlist"
            >
              Add to watchlist
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleMoviePage;
