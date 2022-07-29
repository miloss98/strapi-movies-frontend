import { useContext, useEffect } from "react";
import { MoviesContext } from "../context";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMoviePage = () => {
  const url = "http://localhost:1337";
  const { movieData, setMovieData } = useContext(MoviesContext);
  const { movieID } = useParams();

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
  }, [movieID]);
  console.log(movieData.data?.data?.attributes);
  return (
    <div className="single-movie-container">
      <h1> {movieData.data?.data?.attributes?.name} </h1>
      <img
        src={
          url + movieData.data?.data?.attributes?.image?.data?.attributes?.url
        }
        alt={movieData.data?.data?.attributes?.image?.data?.attributes?.name}
      />
      <p> Actors: {movieData.data?.data?.attributes?.actors}</p>
      <p> Description: {movieData.data?.data?.attributes?.description}</p>
      <p>
        {" "}
        Genre:
        {movieData.data?.data?.attributes?.categories?.data.map((category) => {
          const { attributes, id } = category;
          return <span key={id}>{attributes?.name}</span>;
        })}
      </p>
      <span> Director: {movieData.data?.data?.attributes?.director}</span>
      <span> Release date: {movieData.data?.data?.attributes?.released} </span>
      <span> Duration: {movieData.data?.data?.attributes?.duration}</span>
      <span> Rating: {movieData.data?.data?.attributes?.rating} </span>
    </div>
  );
};

export default SingleMoviePage;
