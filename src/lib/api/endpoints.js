// src/lib/api/endpoints.js

const API_KEY = "eb4f97e822571b55875d6ecb344b84e6";
const BASE_URL = "https://api.themoviedb.org/3";

export const endpoints = {
  movies: {
    popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`,
    nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=tr-TR`,
    topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=tr-TR`,
  },
  movieVideos: (movieId) =>
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=tr-TR`,
};
