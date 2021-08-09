import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Detail from "./components/Detail";

import config from "../../config";

import "./index.css";

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

      <Detail />
    </div>
  );
}

export default HomeScreen;
