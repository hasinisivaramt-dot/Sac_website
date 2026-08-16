import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { CampusSelectorModal } from "@/components/common/CampusSelector";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export interface CampusLayoutProps {
  children: React.ReactNode;
}

export function CampusLayout({ children }: CampusLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#650B25] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CampusSelectorModal />
      <ScrollToTop />
    </div>
  );
}
