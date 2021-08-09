import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { unSelect, selectMovie } from "../../../features/movieSlice";
import "./Detail.css";

function Detail() {
  const movie = useSelector(selectMovie);
  const dispatch = useDispatch();

  if (movie) {
    const {
      poster_path,
      original_language,
      original_name,
      title,
      overview,
      release_date,
      first_air_date,
      vote_average,
      vote_count,
    } = movie;

    const handleClickCloseButton = () => {
      dispatch(unSelect());
    };

    return (
      <div className="detail">
        <div className="detail__container">
          <div className="detail__top">
            <button
              className="detail__close"
              onClick={() => handleClickCloseButton()}
            >
              X
            </button>
          </div>
          <div className="detail__bottom">
            <div className="detail__left">
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt="detail image"
              />
            </div>
            <div className="detail__right">
              <h1>
                {original_name ? original_name : title} ({original_language})
              </h1>
              <div className="detail__rightLine" />
              <p className="detail__overview">{overview}</p>
              <p className="detail__releaseDate">
                Released Date:{" "}
                <em>{release_date ? release_date : first_air_date}</em>
              </p>
              <p
                className={`detail__rate ${
                  vote_average >= 8
                    ? "detail__rateHigh"
                    : vote_average >= 7
                    ? "detail__rateMedium"
                    : "detail__rateLow"
                }`}
              >
                average <strong>{vote_average}</strong> votes over {vote_count}{" "}
                votes
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Detail;
