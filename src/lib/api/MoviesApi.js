// src/lib/api/moviesApi.js

import { API_KEY, BASE_URL, LANGUAGE } from ".";

export async function fetchPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}

export async function fetchNowPlayingMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}

export async function fetchTopRatedMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}
