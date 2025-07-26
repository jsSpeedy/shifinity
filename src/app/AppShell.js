// src/app/AppShell.js
"use client";
import { CustomThemeProvider } from "@/styles/ThemeContext";
import GlobalStyle from "@/styles/globalStyles";
import Header from "@/components/Header";

const AppShell = ({ children, navData }) => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Header navData={navData} />
      {children}
    </CustomThemeProvider>
  );
};

export default AppShell;
