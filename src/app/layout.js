// src/app/layout.js
"use client";
import { CustomThemeProvider } from "@/styles/ThemeContext";
import GlobalStyle from "@/styles/globalStyles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <CustomThemeProvider>
          <GlobalStyle />
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
