// src/styles/theme.js
"use client";

export const lightTheme = {
  name: "light",

  background: "#FFFFFF", // Arkaplan
  surface: "#F2F2F2", // Kart içi yüzey
  textPrimary: "#1A1A1A", // Ana metin
  textSecondary: "#555555", // İkincil metin

  primary: "#7FDBFF", // Neon blue pastel (Light)
  secondary: "#D8B4FF", // Neon purple pastel (Light)

  border: "#E0E0E0",
  hover: "#63B3ED",
  shadow: "rgba(0, 0, 0, 0.05)",
};

export const darkTheme = {
  name: "dark",

  background: "#0B0B0D", // Arkaplan
  surface: "#1A1A1D", // Kart içi yüzey
  textPrimary: "#CCCCCC", // Ana metin
  textSecondary: "#888888", // İkincil metin

  primary: "#00BFFF", // Neon blue (Dark)
  secondary: "#A020F0", // Neon purple (Dark)

  border: "#3D3D5C",
  hover: "#3A7BD5",
  shadow: "rgba(0, 0, 0, 0.4)",
};
