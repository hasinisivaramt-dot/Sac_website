import achievementsImg from "@/assets/achievements.jpg";
import eventTalent from "@/assets/event-talent.jpg";
import clubLiterature from "@/assets/club-literature.jpg";
import clubFilm from "@/assets/club-film.jpg";
import clubPhotography from "@/assets/club-photography.jpg";
import clubMusic from "@/assets/club-music.jpg";
import type { CompetitionItem, AchievementStat } from "../../types";

export const achievementStats: AchievementStat[] = [
  { index: "01", value: 28, suffix: "+", label: "Business Case Wins" },
  { index: "02", value: 15, suffix: "+", label: "Startup Ventures" },
  { index: "03", value: 6, suffix: "+", label: "Corporate Citations" },
  { index: "04", value: 1400, suffix: "+", label: "Students Impacted" },
];

export const competitionsData: CompetitionItem[] = [
  {
    title: "National Case Study Challenge",
    category: "Strategic Management",
    date: "Registrations open till 18 Aug",
    image: clubLiterature,
  },
  {
    title: "Stock Wars & Trading Sim",
    category: "Financial Markets",
    date: "Registrations open till 30 Aug",
    image: clubFilm,
  },
  {
    title: "Brand Pitch & Ad Creation",
    category: "Marketing & Media",
    date: "Submissions till 12 Sep",
    image: clubPhotography,
  },
  {
    title: "Business Debate League",
    category: "Economics & Policy",
    date: "Auditions from 25 Sep",
    image: clubMusic,
  },
];

export const achievementsData = {
  stats: achievementStats,
  image: achievementsImg,
  talentImage: eventTalent,
};
