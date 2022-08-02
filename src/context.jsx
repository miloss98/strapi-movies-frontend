import React, { useState, useEffect } from "react";
import axios from "axios";

const MoviesContext = React.createContext();
const url = "http://localhost:1337/api/movies/?populate=*";

const MoviesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  //const [filteredData, setFilteredData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  //alert
  const added = "Added to watchlist!";
  const removed = "Removed from watchlist!";
  const [message, setMessage] = useState("");
  const [alertBox, setAlertBox] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToWatchlist = (id, e) => {
    e.preventDefault();
    const newWatchlistItem = data.filter((movie) => movie.id === id);
    setWatchlist([...watchlist, newWatchlistItem]);
    setMessage(added);
    setAlertBox(true);

    setTimeout(() => {
      setAlertBox(false);
      setMessage("");
    }, 1500);
  };

  const removeFromWatchlist = (id, e) => {
    e.preventDefault();
    const newWatchlist = watchlist.filter((movie) => movie[0].id !== id);
    setWatchlist(newWatchlist);
    setMessage(removed);
    setAlertBox(true);

    setTimeout(() => {
      setAlertBox(false);
      setMessage("");
    }, 1500);
  };

  return (
    <MoviesContext.Provider
      value={{
        data,
        //filteredData,
        //setFilteredData,
        movieData,
        setMovieData,
        watchlist,
        setWatchlist,
        addToWatchlist,
        removeFromWatchlist,
        alertBox,
        message,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export { MoviesContext, MoviesProvider };
