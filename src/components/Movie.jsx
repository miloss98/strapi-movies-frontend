import "./../styles/movies.css";
import { useContext } from "react";
import { MoviesContext } from "./../context";

const url = "http://localhost:1337";

const Movie = () => {
  const { data } = useContext(MoviesContext);

  return (
    <>
      {data.map((movie) => {
        const { attributes, id } = movie;
        console.log(attributes?.image?.data?.attributes?.url);
        return (
          <div key={id} className="movie-card">
            <h1> {attributes?.name} </h1>
            <img
              src={url + attributes?.image?.data?.attributes?.url}
              alt={attributes?.name}
            />
            <p>{attributes?.description}</p>
            <p> Actors: {attributes?.actors}</p>
            <p>
              {" "}
              Genre:
              {attributes?.categories?.data.map((category) => {
                const { attributes, id } = category;
                return <span key={id}>{attributes?.name}</span>;
              })}
            </p>
            <span> Director: {attributes?.director}</span>
            <span> Release date: {attributes?.released} </span>
            <span> Duration: {attributes?.duration}</span>
            <span> Rating: {attributes?.rating} </span>
          </div>
        );
      })}
    </>
  );
};

export default Movie;
