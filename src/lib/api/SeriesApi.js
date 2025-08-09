// src/lib/api/seriesApi.js
import { API_KEY, BASE_URL, LANGUAGE } from ".";

export async function fetchPopularTVShows() {
  const res = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}

export async function fetchTopRatedTVShows() {
  const res = await fetch(
    `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}

export async function fetchAiringTodayTVShows() {
  const res = await fetch(
    `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=${LANGUAGE}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}
