// src/context/ThemeContext.js
"use client";
import { darkTheme, lightTheme } from "@/styles/theme";
import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const theme = isDark ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
