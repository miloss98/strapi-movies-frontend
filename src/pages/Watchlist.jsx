import { useContext, useEffect } from "react";
import { MoviesContext } from "../context";

const Watchlist = () => {
  const { watchlist, setWatchlist, removeFromWatchlist } =
    useContext(MoviesContext);

  if (watchlist.length === 0) {
    return <h1> There are no movies in your watchlist</h1>;
  }
  return (
    <div className="watchlist-container">
      {watchlist.map((movie) => {
        return movie.map((item) => {
          const { attributes, id } = item;
          return (
            <div key={id}>
              {attributes.name}
              <button onClick={(e) => removeFromWatchlist(id, e)}>
                Remove from watchlist{" "}
              </button>
            </div>
          );
        });
      })}
    </div>
  );
};

export default Watchlist;
