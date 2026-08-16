import achievementsImg from "@/assets/achievements.jpg";
import eventTalent from "@/assets/event-talent.jpg";
import clubArts from "@/assets/club-arts.jpg";
import clubPhotography from "@/assets/club-photography.jpg";
import clubDance from "@/assets/club-dance.jpg";
import clubMusic from "@/assets/club-music.jpg";
import clubFilm from "@/assets/club-film.jpg";
import clubLiterature from "@/assets/club-literature.jpg";
import type { CompetitionItem, AchievementStat } from "../../types";

export const achievementStats: AchievementStat[] = [
  { index: "01", value: 50, suffix: "+", label: "Awards Won" },
  { index: "02", value: 25, suffix: "+", label: "Competitions" },
  { index: "03", value: 10, suffix: "+", label: "National Recognitions" },
  { index: "04", value: 1000, suffix: "+", label: "Students Impacted" },
];

export const competitionsData: CompetitionItem[] = [
  {
    title: "Arts Competition",
    category: "Visual Arts",
    date: "Registrations open till 12 Sep",
    image: clubArts,
  },
  {
    title: "Photography Competition",
    category: "Visual Media",
    date: "Registrations open till 20 Sep",
    image: clubPhotography,
  },
  {
    title: "Dance Competition",
    category: "Performing Arts",
    date: "Auditions from 28 Sep",
    image: clubDance,
  },
  {
    title: "Music Competition",
    category: "Performing Arts",
    date: "Auditions from 04 Oct",
    image: clubMusic,
  },
  {
    title: "Film Making Competition",
    category: "Cinema",
    date: "Submissions till 15 Oct",
    image: clubFilm,
  },
  {
    title: "Literary Competition",
    category: "Words & Debate",
    date: "Registrations open till 22 Oct",
    image: clubLiterature,
  },
];

export const achievementsData = {
  stats: achievementStats,
  image: achievementsImg,
  talentImage: eventTalent,
};
