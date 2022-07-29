import React, { useState, useEffect } from "react";
import axios from "axios";

const MoviesContext = React.createContext();
const url = "http://localhost:1337/api/movies/?populate=*";

const MoviesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFiltedData] = useState([]);

  const [movieData, setMovieData] = useState([]);

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

  return (
    <MoviesContext.Provider
      value={{ data, filteredData, setFiltedData, movieData, setMovieData }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export { MoviesContext, MoviesProvider };
