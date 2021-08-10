const DEFAULT = "https://api.themoviedb.org/3";

const TMDB_api_key = process.env.REACT_APP_TMDB_API_KEY;

const stripe_public_key = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const firebase_api_key = process.env.REACT_APP_FIREBASE_API_KEY;
const firebase_auth_domain = process.env.REACT_APP_AUTH_DOMAIN;
const firebase_project_id = process.env.REACT_APP_PROJECT_ID;
const firebase_storage_bucket = process.env.REACT_APP_STORAGE_BUCKET;
const firebase_messaging_sender_id = process.env.REACT_APP_MESSAGING_SENDER_ID;
const firebase_app_id = process.env.REACT_APP_APP_ID;

const config = {
  TMDB: {
    fetchTrending: `${DEFAULT}/trending/all/week?api_key=${TMDB_api_key}&language=en-US`,
    fetchNetflixOriginals: `${DEFAULT}/discover/tv?api_key=${TMDB_api_key}&with_networks=213`,
    fetchTopRated: `${DEFAULT}/movie/top_rated?api_key=${TMDB_api_key}&language=en-US`,
    fetchActionMovies: `${DEFAULT}/discover/movie?api_key=${TMDB_api_key}&with_genres=28`,
    fetchComedyMovies: `${DEFAULT}/discover/movie?api_key=${TMDB_api_key}&with_genres=35`,
    fetchHorrorMovies: `${DEFAULT}/discover/movie?api_key=${TMDB_api_key}&with_genres=27`,
    fetchRomanceMovies: `${DEFAULT}/discover/movie?api_key=${TMDB_api_key}&with_genres=2=10749`,
    fetchDocumentaries: `${DEFAULT}/discover/movie?api_key=${TMDB_api_key}&with_genres=99`,
  },
  firebase: {
    api_key: `${firebase_api_key}`,
    auth_domain: `${firebase_auth_domain}`,
    project_id: `${firebase_project_id}`,
    storage_bucket: `${firebase_storage_bucket}`,
    messaging_sender_id: `${firebase_messaging_sender_id}`,
    app_id: `${firebase_app_id}`,
  },
  stripe: {
    stripePublicKey: `${stripe_public_key}`,
  },
};

module.exports = config;
