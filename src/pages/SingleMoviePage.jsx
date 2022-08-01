import { useContext, useEffect } from "react";
import { MoviesContext } from "../context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./../styles/singlemovie.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

const SingleMoviePage = () => {
  const url = "http://localhost:1337";
  const { movieData, setMovieData } = useContext(MoviesContext);
  const { movieID } = useParams();
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/movies/${movieID}/?populate=*`
      );
      setMovieData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieID]);

  return (
    <div className="single-movie-wrapper">
      {" "}
      <div className="single-movie-container">
        <section className="movie-header">
          <div className="left-side">
            {" "}
            <HiArrowNarrowLeft
              className="go-back"
              onClick={() => navigate(-1)}
            />{" "}
            <h1 id="title"> {movieData.data?.data?.attributes?.name} </h1>
          </div>

          <p>
            IMDb rating:{" "}
            <span className="rating">
              {movieData.data?.data?.attributes?.rating}{" "}
            </span>
            / 10
          </p>
        </section>
        <section className="main-info">
          <img
            className="cover-image"
            src={
              url +
              movieData.data?.data?.attributes?.image?.data?.attributes?.url
            }
            alt="movie-img"
          />
          <div className="right-side">
            <p className="description">
              {movieData.data?.data?.attributes?.description}
            </p>
            <p className="actors">
              Actors:{" "}
              <span className="data">
                {" "}
                {movieData.data?.data?.attributes?.actors}
              </span>
            </p>
            <p>
              Genre:
              {movieData.data?.data?.attributes?.categories?.data.map(
                (category) => {
                  const { attributes, id } = category;
                  return (
                    <span className="data" key={id}>
                      {" "}
                      {attributes?.name}
                    </span>
                  );
                }
              )}
            </p>
            <p>
              {" "}
              Director:{" "}
              <span className="data">
                {movieData.data?.data?.attributes?.director}{" "}
              </span>
            </p>
            <p>
              {" "}
              Released:{" "}
              <span className="data">
                {" "}
                {movieData.data?.data?.attributes?.released}{" "}
              </span>
            </p>
            <p>
              {" "}
              Duration:{" "}
              <span className="data">
                {movieData.data?.data?.attributes?.duration}
              </span>{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleMoviePage;
