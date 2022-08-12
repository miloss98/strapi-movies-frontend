import { useContext } from "react";
import { MoviesContext } from "../modules/context";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/pages/singlemovie.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
//graphql
import { useQuery } from "@apollo/client";
import { SINGLEMOVIE } from "./../modules/queries";
//ratings library
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
  console.log(data.movie.data);

  return (
    <>
      {alertBox && (
        <div className="alert-box-add">
          <p className="alert-message-add"> {message}</p>
        </div>
      )}
      <div className="single-movie-wrapper">
        <div className="single-movie-container">
          <section className="movie-header">
            <div className="left-side">
              {" "}
              <HiArrowNarrowLeft
                className="go-back"
                onClick={() => navigate(-1)}
              />{" "}
              <h2 id="title"> {data.movie.data.attributes.name} </h2>
            </div>
            <div className="right-side">
              <div className="progressbar-container">
                {/* IMDb rating: */}
                <CircularProgressbar
                  value={data.movie.data.attributes.rating}
                  minValue={1}
                  maxValue={10}
                  text={data.movie.data.attributes.rating}
                  styles={buildStyles({
                    textSize: "2rem",
                    textColor: "white",
                    trailColor: "gray",
                    pathColor: "orangered",
                  })}
                />
              </div>
            </div>
          </section>
          <section className="main-info">
            <div className="left-side-container">
              <img
                className="cover-image"
                src={
                  url + data.movie.data.attributes?.image?.data?.attributes?.url
                }
                alt="movie-img"
              />
            </div>
            <div className="right-side-container">
              <p className="description">
                {data.movie.data.attributes.description}
              </p>
              <p className="actors">
                Actors:{" "}
                <span className="data">
                  {data.movie.data.attributes.actors}
                </span>
              </p>
              <p>
                Genre:
                {data.movie.data.attributes?.categories?.data.map(
                  (category) => {
                    const { attributes } = category;

                    return (
                      <span className="data" key={attributes?.name}>
                        {" "}
                        {attributes?.name}
                      </span>
                    );
                  }
                )}
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
                onClick={(e) => addToWatchlist(movieID, e)}
                id="add-to-watchlist"
              >
                Add to watchlist
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SingleMoviePage;
