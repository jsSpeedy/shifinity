// src/components/Layout/index.js
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Layout({ navData, children }) {
  return (
    <>
      <Header navData={navData} />
      {children}
      <Footer />
    </>
  );
}
