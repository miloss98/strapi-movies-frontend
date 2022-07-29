import "./../styles/movies.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/movies/?populate=*"
      );
      setData(response.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.map((movie) => {
        const { attributes, id } = movie;
        console.log(attributes?.image?.data?.attributes?.url);
        return (
          <div key={id} className="movie-card">
            <h1> {attributes?.name} </h1>
            <img
              src={
                `http://localhost:1337` +
                attributes?.image?.data?.attributes?.url
              }
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
