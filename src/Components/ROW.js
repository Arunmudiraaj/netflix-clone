import React from "react";
import { useEffect } from "react";
import movieDB from "../axios";
import { useState } from "react";
import "./Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";
const ROW = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieDB.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ROW;
