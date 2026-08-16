import eventInauguration from "@/assets/event-inauguration.jpg";
import eventCultural from "@/assets/event-cultural.jpg";
import eventTalent from "@/assets/event-talent.jpg";
import type { EventItem } from "../../types";

export const eventsData: EventItem[] = [
  {
    day: "19",
    month: "AUG",
    title: "Global Leadership Summit 2025",
    location: "GBS Executive Hall",
    category: "Conclave",
    image: eventInauguration,
    description:
      "Keynote addresses from startup founders, venture capitalists, and global business strategists.",
  },
  {
    day: "04",
    month: "SEP",
    title: "VentureCraft Startup Arena",
    location: "Innovation Incubator",
    category: "Competition",
    image: eventCultural,
    description:
      "Live seed pitch competition where student teams pitch scalable business ideas to angel investors.",
  },
  {
    day: "20",
    month: "OCT",
    title: "Synergy Management Fest",
    location: "Main Auditorium",
    category: "Festival",
    image: eventTalent,
    description:
      "Two-day business simulation, brand marketing arena, finance quiz, and cultural celebration.",
  },
];
