// src/lib/api/imagesApi.js
export const getImageUrl = (path, size = "original") => {
  if (!path) return null;
  return `https://media.themoviedb.org/t/p/${size}${path}`;
};
