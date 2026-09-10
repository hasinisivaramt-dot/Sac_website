import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/components/layout";
import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";

export function PageLayout() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white font-sans text-[#272329] antialiased selection:bg-[#C99A3D]/30 selection:text-[#6D0826]">
        <Navbar />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
