import React from "react";
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
import { motion, useScroll, useSpring } from "framer-motion";

export function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#6D0826] via-[#C99A3D] to-[#6D0826] z-50 origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <HeroSection />
      <AboutSection />
      <ClubsSection />
      <EventsSection />
      <CompetitionsSection />
      <AchievementsSection />
      <VisionariesSection />
      <StudentCouncilSection />
      <ImpactSection />
      <StudentVoicesSection />
      <GallerySection />
      <NoticeBoard />
    </>
  );
}

