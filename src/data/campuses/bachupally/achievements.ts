import achievementsImg from "@/assets/achievements.jpg";
import eventTalent from "@/assets/event-talent.jpg";
import clubPhotography from "@/assets/club-photography.jpg";
import clubDance from "@/assets/club-dance.jpg";
import clubMusic from "@/assets/club-music.jpg";
import clubFilm from "@/assets/club-film.jpg";
import type { CompetitionItem, AchievementStat } from "../../types";

export const achievementStats: AchievementStat[] = [
  { index: "01", value: 35, suffix: "+", label: "Hackathons Won" },
  { index: "02", value: 18, suffix: "+", label: "Competitions" },
  { index: "03", value: 8, suffix: "+", label: "State Recognitions" },
  { index: "04", value: 2200, suffix: "+", label: "Students Impacted" },
];

export const competitionsData: CompetitionItem[] = [
  {
    title: "Hackathon Sprint",
    category: "Coding & AI",
    date: "Registrations open till 15 Aug",
    image: clubFilm,
  },
  {
    title: "Web & App Design Battle",
    category: "UI/UX & Frontend",
    date: "Submissions till 25 Aug",
    image: clubPhotography,
  },
  {
    title: "RoboRace Championship",
    category: "Hardware & IoT",
    date: "Auditions from 05 Sep",
    image: clubDance,
  },
  {
    title: "Music & Band Showcase",
    category: "Performing Arts",
    date: "Auditions from 18 Sep",
    image: clubMusic,
  },
];

export const achievementsData = {
  stats: achievementStats,
  image: achievementsImg,
  talentImage: eventTalent,
};
