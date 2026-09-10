import { heroData } from "./hero";
import { aboutData } from "./about";
import { visionariesData } from "./visionaries";
import { galleryData } from "./gallery";
import { eventsData } from "./events";
import { activitiesData } from "./activities";
import { azizNagarClubs } from "./clubs";
import { achievementsData, competitionsData, achievementStats } from "./achievements";
import { statisticsData, impactStatsData } from "./statistics";
import { contactData } from "./contact";
const councilImg = "/assets/misc/student-council.jpg";
const student1 = "/assets/misc/student-1.jpg";
const student2 = "/assets/misc/student-2.jpg";
const student3 = "/assets/misc/student-3.jpg";
export * from "./hero";
export * from "./about";
export * from "./visionaries";
export * from "./gallery";
export * from "./events";
export * from "./activities";
export * from "./clubs";
export * from "./achievements";
export * from "./statistics";
export * from "./contact";
export const azizNagarTestimonials = [{
  name: "Ananya R.",
  club: "Dance Club",
  image: student1,
  quote: "SAC gave me the confidence to perform on the biggest stages of the university. I found a second family here.",
  rating: 5
}, {
  name: "Rahul V.",
  club: "Photography Club",
  image: student2,
  quote: "From borrowing a camera to leading campus shoots — the mentorship at SAC completely changed my craft.",
  rating: 5
}, {
  name: "Meghana T.",
  club: "Literature Club",
  image: student3,
  quote: "Open mic nights taught me to speak my mind. SAC connects people who genuinely want to grow together.",
  rating: 5
}];
export const campusData = {
  id: "aziz-nagar",
  name: "Aziz Nagar",
  shortName: "Aziz Nagar",
  fullName: "KLH Hyderabad — Aziz Nagar Main Campus",
  tagline: "The Flagship Engineering & Technology Campus",
  badge: "Engineering & Innovation Hub",
  themeColor: "#650B25",
  accentColor: "#C99A3D",
  hero: heroData,
  about: aboutData,
  visionaries: visionariesData,
  gallery: galleryData,
  events: eventsData,
  activities: activitiesData,
  competitions: competitionsData,
  achievements: achievementsData,
  statistics: statisticsData,
  impactStats: impactStatsData,
  studentCouncil: {
    title: "Student Council",
    description: "The official student representative body orchestrating university events, bridging dialogue between students and faculty, and fostering an energetic campus environment.",
    image: councilImg
  },
  testimonials: azizNagarTestimonials,
  clubs: azizNagarClubs,
  contact: contactData
};