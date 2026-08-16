import React from "react";
import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  VisionariesSection,
  AchievementsSection,
  StudentCouncilSection,
  ImpactSection,
  ClubsSection,
  EventsSection,
  CompetitionsSection,
  StudentVoicesSection,
  GallerySection,
  NoticeBoard,
} from "@/components/sections";
import { CampusSelectorModal } from "@/components/campus";
import { motion, useScroll, useSpring } from "framer-motion";
import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";
import { useCampus } from "@/hooks/useCampus";

export function LandingPage() {
  const { campusId } = useCampus();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const isAzizNagar = campusId === "aziz-nagar" || (campusId as string) === "aziznagar";

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-white font-sans text-[#272329] antialiased selection:bg-[#C99A3D]/30 selection:text-[#6D0826]">
        {/* Subtle Top Scroll Progress Bar */}
        {isAzizNagar && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#6D0826] via-[#C99A3D] to-[#6D0826] z-50 origin-left pointer-events-none"
            style={{ scaleX }}
          />
        )}

        {/* 1. Navbar */}
        <Navbar />

        {/* Main Full-Width Standalone Vertical Flow */}
        <main id="main-content">
          {isAzizNagar ? (
            <>
              {/* 2. Hero Section */}
              <HeroSection />

              {/* 3. About SAC */}
              <AboutSection />

              {/* 4. Clubs */}
              <ClubsSection />

              {/* 5. Events */}
              <EventsSection />

              {/* 6. Competitions */}
              <CompetitionsSection />

              {/* 7. Celebrating Student Excellence / Achievements */}
              <AchievementsSection />

              {/* 8. Visionaries */}
              <VisionariesSection />

              {/* 9. Student Council */}
              <StudentCouncilSection />

              {/* 10. Animated Impact Banner */}
              <ImpactSection />

              {/* 11. Student Voices */}
              <StudentVoicesSection />

              {/* 12. Gallery */}
              <GallerySection />

              {/* 13. Notice Board */}
              <NoticeBoard />
            </>
          ) : (
            <div className="min-h-[85vh] bg-white pt-24" />
          )}
        </main>

        {/* 14. Footer */}
        <Footer />

        {/* Campus Selector Modal */}
        <CampusSelectorModal />
      </div>
    </SmoothScrollProvider>
  );
}

