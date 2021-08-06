import React, { useState, useEffect } from "react";
import axios from "axios";

import config from "../config";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(config.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  // console.log(movie);

  const defaultBannerImg =
    "https://blog.resellerclub.com/wp-content/uploads/2017/02/netflix.png";

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie ? movie.backdrop_path : defaultBannerImg
        }")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeButton" />
    </header>
  );
}

export default Banner;
