// src/lib/api/tmdb.js

import { endpoints } from "./endpoints";

export async function fetchPopularMovies() {
  const res = await fetch(endpoints.movies.popular, { cache: "no-store" });
  const data = await res.json();
  console.log("Popular Movies Data:", data);
  return data.results;
}

export async function fetchNowPlayingMovies() {
  const res = await fetch(endpoints.movies.nowPlaying, { cache: "no-store" });
  const data = await res.json();
  console.log("Now Playing Movies Data:", data);
  return data.results;
}

export async function fetchTopRatedMovies() {
  const res = await fetch(endpoints.movies.topRated, { cache: "no-store" });
  const data = await res.json();
  console.log("Top Rated Movies Data:", data);
  return data.results;
}

export async function fetchMovieTrailer(movieId) {
  const res = await fetch(endpoints.movieVideos(movieId), {
    cache: "no-store",
  });
  const data = await res.json();
  const trailer = data.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  console.log("Movie Trailer Data:", trailer);
  return trailer?.key; // YouTube video ID
}
