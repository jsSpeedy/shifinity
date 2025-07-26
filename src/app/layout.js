// src/app/layout.js
import { getNavData } from "@/lib/getNavData";
import AppShell from "./AppShell";

export default async function RootLayout({ children }) {
  const navData = await getNavData();

  return (
    <html lang="en">
      <body>
        <AppShell navData={navData}>{children}</AppShell>
      </body>
    </html>
  );
}
