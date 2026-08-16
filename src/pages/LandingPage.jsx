import HeroSection from '../components/landing/HeroSection';
import StatsSection from '../components/landing/StatsSection';
import AboutSection from '../components/landing/AboutSection';
import ClubsSection from '../components/landing/ClubsSection';
import EventsSection from '../components/landing/EventsSection';
import CompetitionsSection from '../components/landing/CompetitionsSection';
import AchievementsSection from '../components/landing/AchievementsSection';
import VisionariesSection from '../components/landing/VisionariesSection';
import StudentCouncilSection from '../components/landing/StudentCouncilSection';
import StudentVoicesSection from '../components/landing/StudentVoicesSection';
import GallerySection from '../components/landing/GallerySection';

export default function LandingPage({ campus }) {
  return (
    <>
      <HeroSection campus={campus} />
      <AboutSection />
      <StatsSection />
      <ClubsSection />
      <EventsSection />
      <CompetitionsSection />
      <AchievementsSection />
      {/* Visionaries intentionally precedes Student Council */}
      <VisionariesSection />
      <StudentCouncilSection />
      <StudentVoicesSection />
      <GallerySection />
    </>
  );
}
