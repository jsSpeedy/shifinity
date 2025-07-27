// src/app/AppShell.js
"use client";
import { CustomThemeProvider } from "@/styles/ThemeContext";
import GlobalStyle from "@/styles/globalStyles";
import Layout from "@/components/Layout";

const AppShell = ({ children, navData }) => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Layout navData={navData}>{children}</Layout>
    </CustomThemeProvider>
  );
};

export default AppShell;
