import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sac/Navbar";
import { HeroSection } from "@/components/sac/HeroSection";
import { AboutSection } from "@/components/sac/AboutSection";
import { ClubsSection } from "@/components/sac/ClubsSection";
import { EventsSection } from "@/components/sac/EventsSection";
import { CompetitionsSection } from "@/components/sac/CompetitionsSection";
import { AchievementsSection } from "@/components/sac/AchievementsSection";
import { VisionariesSection } from "@/components/sac/VisionariesSection";
import { StudentCouncilSection } from "@/components/sac/StudentCouncilSection";
import { StudentVoicesSection } from "@/components/sac/StudentVoicesSection";
import { GallerySection } from "@/components/sac/GallerySection";
import { NoticeBoard } from "@/components/sac/NoticeBoard";
import { Footer } from "@/components/sac/Footer";

const title = "KLH Student Activity Center | Clubs, Events & Campus Life";
const description =
  "Explore clubs, events, competitions and leadership opportunities at the KLH University Student Activity Center. Explore. Engage. Excel.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ClubsSection />
        <EventsSection />
        <CompetitionsSection />
        <AchievementsSection />
        <VisionariesSection />
        <StudentCouncilSection />
        <StudentVoicesSection />
        <GallerySection />
        <NoticeBoard />
      </main>
      <Footer />
    </div>
  );
}
