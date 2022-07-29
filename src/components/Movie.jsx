import "./../styles/movies.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/movies/");
      setData(response.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="movie-card">
        <h1> movie title</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          commodi cupiditate nobis dolorum quisquam! Maiores doloribus quo iste,
          ducimus suscipit voluptates eos magni obcaecati neque nobis sint nam
          tenetur quisquam!
        </p>
      </div>
      <div className="movie-card">
        <h1> movie title</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, in.
        </p>
      </div>
      <div className="movie-card">
        <h1> movie title</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum
          earum assumenda modi consequuntur sapiente.
        </p>
      </div>
    </>
  );
};

export default Movie;
