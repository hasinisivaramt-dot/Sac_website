import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CampusProvider } from "@/context/CampusContext";
import { PageLayout } from "@/components/layout";
import { CinematicIntro } from "@/components/common/CinematicIntro";
import { Home } from "@/pages/Home";
import { AboutPage } from "@/pages/AboutPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { EventsPage } from "@/pages/EventsPage";
import { AchievementsPage } from "@/pages/AchievementsPage";
import { ContactPage } from "@/pages/ContactPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { ClubDetailPage } from "@/pages/ClubDetailPage";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#272329]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#272329]">Page not found</h2>
        <p className="mt-2 text-sm text-slate-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-[#6D0826] px-4 py-2 text-sm font-medium text-white hover:bg-[#430518]"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <CampusProvider>
        <CinematicIntro />
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="clubs/:clubId" element={<ClubDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CampusProvider>
    </BrowserRouter>
  );
}