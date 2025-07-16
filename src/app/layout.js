// src/app/layout.js
"use client";
import GlobalStyle from "@/styles/globalStyles";
import ThemeProvider from "@/styles/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <ThemeProvider>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
