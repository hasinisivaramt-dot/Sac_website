import React from "react";
import { Navbar } from "@/components/sac/Navbar";
import { HeroSection } from "@/components/sac/HeroSection";
import { AboutSection } from "@/components/sac/AboutSection";
import { VisionariesSection } from "@/components/sac/VisionariesSection";
import { AchievementsSection } from "@/components/sac/AchievementsSection";
import { StudentCouncilSection } from "@/components/sac/StudentCouncilSection";
import { ImpactSection } from "@/components/sac/ImpactSection";
import { ClubsSection } from "@/components/sac/ClubsSection";
import { EventsSection } from "@/components/sac/EventsSection";
import { CompetitionsSection } from "@/components/sac/CompetitionsSection";
import { StudentVoicesSection } from "@/components/sac/StudentVoicesSection";
import { GallerySection } from "@/components/sac/GallerySection";
import { NoticeBoard } from "@/components/sac/NoticeBoard";
import { Footer } from "@/components/sac/Footer";
import { CampusSelectorModal } from "@/components/common/CampusSelector";

import { motion, useScroll, useSpring } from "framer-motion";
import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white font-sans text-[#272329] antialiased selection:bg-[#C99A3D]/30 selection:text-[#6D0826]">
        {/* Subtle Top Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#6D0826] via-[#C99A3D] to-[#6D0826] z-50 origin-left pointer-events-none"
          style={{ scaleX }}
        />

        {/* 1. Navbar */}
        <Navbar />

        {/* Main Full-Width Standalone Vertical Flow */}
        <main id="main-content">
          {/* 2. Hero Section */}
          <HeroSection />

          {/* 3. About SAC */}
          <AboutSection />

          {/* 4. Visionaries (Directly below About SAC) */}
          <VisionariesSection />

          {/* 5. Celebrating Student Excellence / Achievements */}
          <AchievementsSection />

          {/* 6. Student Council */}
          <StudentCouncilSection />

          {/* 7. Animated Impact Banner */}
          <ImpactSection />

          {/* 8. Clubs */}
          <ClubsSection />

          {/* 9. Events */}
          <EventsSection />

          {/* 10. Competitions */}
          <CompetitionsSection />

          {/* 11. Student Voices */}
          <StudentVoicesSection />

          {/* 12. Gallery */}
          <GallerySection />

          {/* 13. Notice Board */}
          <NoticeBoard />
        </main>

        {/* 14. Footer */}
        <Footer />

        {/* Campus Selector Modal */}
        <CampusSelectorModal />
      </div>
    </SmoothScrollProvider>
  );
}
