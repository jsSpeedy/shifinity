// src/app/layout.js
import { getNavData } from "@/lib/getNavData";
import AppLayout from "./AppLayout";

export default async function RootLayout({ children }) {
  const navData = await getNavData();

  return (
    <html lang="tr" className="tc-new-price">
      <body>
        <AppLayout navData={navData}>{children}</AppLayout>
      </body>
    </html>
  );
}
