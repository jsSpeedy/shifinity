// src/styles/theme.js
"use client";

import { ThemeProvider as StyledProvider } from "styled-components";
import { useState, useEffect } from "react";

export const lightTheme = {
  background: "#ffffff",
  text: "#111111",
};

export const darkTheme = {
  background: "#0f0f0f",
  text: "#ffffff",
};

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true); // default olarak dark

  // Sistem temasına göre ayarla (isteğe bağlı)
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
  }, []);

  return (
    <StyledProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </StyledProvider>
  );
}
