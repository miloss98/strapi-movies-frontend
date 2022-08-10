import { Movie } from "./index";
import "./../styles/components/movies.css";
import { useContext } from "react";
import { MoviesContext } from "../modules/context";

const Movies = () => {
  const { filteredData } = useContext(MoviesContext);
  // eslint-disable-next-line
  if (filteredData == "" && filteredData.length < 1) {
    return (
      <div className="no-movies-container">
        <div id="no-movies">
          <p className="no-movies-p">No movies matched your criteria!</p>
          <p className="try-again"> Please, try again. </p>
        </div>
      </div>
    );
  }
  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        <Movie />
      </div>
    </div>
  );
};

export default Movies;
