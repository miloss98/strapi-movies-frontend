import { useContext, useEffect } from "react";
import { MoviesContext } from "../context";

const Watchlist = () => {
  const { watchlist, setWatchlist } = useContext(MoviesContext);

  useEffect(() => {
    setWatchlist(["dqwdqwd", "dwqdwdqwdqwdqwdqw"]);
  }, []);

  if (watchlist.length === 0) {
    return <h1> There are no movies in your watchlist</h1>;
  }
  return (
    <h1>
      {watchlist[0]} {watchlist[1]}
    </h1>
  );
};

export default Watchlist;
