import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TopNav from "@/components/top-nav";
import React from "react";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
