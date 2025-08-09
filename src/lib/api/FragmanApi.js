// src/lib/api/FragmanApi.js
import { API_KEY, BASE_URL, LANGUAGE } from ".";

export async function fetchMovieTrailer(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return (
    data.results?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    ) || null
  );
}

export async function fetchTVShowTrailer(id) {
  const res = await fetch(
    `${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return (
    data.results?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    ) || null
  );
}
