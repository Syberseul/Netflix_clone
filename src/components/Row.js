import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { select } from "../features/movieSlice";
import axios from "axios";

import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    dispatch(
      select({
        poster_path: movie.poster_path,
        original_language: movie.original_language,
        original_name: movie.original_name,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        first_air_date: movie.first_air_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      })
    );
  };

  return (
    <div className="row">
      <h2>{movies.length > 0 ? title : null}</h2>

      {movies.length > 0 ? (
        <div className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Row;
