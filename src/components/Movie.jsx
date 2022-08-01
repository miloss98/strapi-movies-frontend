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
                      {attributes?.name + ""}{" "}
                    </span>
                  );
                })}
              </p>
            </section>
            <section className="other-info-container">
              <p>
                Release date: <span> {attributes?.released} </span>
              </p>
              <p>
                Duration: <span> {attributes?.duration}</span>
              </p>
              <p>
                Rating: <span> {attributes?.rating} </span>
              </p>
            </section>
            <section className="read-more-container">
              <button className="read-more">Read more</button>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Movie;
