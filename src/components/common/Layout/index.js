// src/components/common/Layout/index.js
"use client";

import Footer from "@/components/template/Footer";
import Container from "@/components/common/Container";
import Header from "@/components/template/Header";

export default function Layout({ navData, children }) {
  return (
    <>
      <Header navData={navData} />
      {children}
      <Footer />
    </>
  );
}
