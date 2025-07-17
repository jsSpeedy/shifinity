//src/components/Header/ThemeToggle.js
"use client";
import styled from "styled-components";
import { useTheme } from "@/styles/ThemeContext";

const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>{isDark ? "Light Mode" : "Dark Mode"}</Button>
  );
};

export default ThemeToggle;
