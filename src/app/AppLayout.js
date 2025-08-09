// src/app/AppShell.js
"use client";

import GlobalStyle from "@/styles/globalStyles";
import Layout from "@/components/common/Layout";
import { CustomThemeProvider } from "@/context/ThemeContext";

const AppLayout = ({ children, navData }) => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Layout navData={navData}>{children}</Layout>
    </CustomThemeProvider>
  );
};

export default AppLayout;
