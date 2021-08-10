import React from "react";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import Detail from "../../components/Detail";

import config from "../../config";

import "./index.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={config.TMDB.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchURL={config.TMDB.fetchTrending} />
      <Row title="TOP RATED" fetchURL={config.TMDB.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={config.TMDB.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={config.TMDB.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={config.TMDB.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={config.TMDB.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={config.TMDB.fetchDocumentaries} />

      <Detail />
    </div>
  );
}

export default HomeScreen;
