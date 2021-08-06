import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";

import config from "../config";

import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={config.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchURL={config.fetchTrending} />
      <Row title="TOP RATED" fetchURL={config.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={config.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={config.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={config.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={config.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={config.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
