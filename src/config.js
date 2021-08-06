const DEFAULT = "https://api.themoviedb.org/3";
const api_key = process.env.REACT_APP_API_KEY;

const config = {
  fetchTrending: `${DEFAULT}/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `${DEFAULT}/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `${DEFAULT}/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `${DEFAULT}/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `${DEFAULT}/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `${DEFAULT}/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `${DEFAULT}/discover/movie?api_key=${api_key}&with_genres=2=10749`,
  fetchDocumentaries: `${DEFAULT}/discover/movie?api_key=${api_key}&with_genres=99`,
};

module.exports = config;
