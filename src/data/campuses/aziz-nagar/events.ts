import eventInauguration from "@/assets/event-inauguration.jpg";
import eventCultural from "@/assets/event-cultural.jpg";
import eventTalent from "@/assets/event-talent.jpg";
import type { EventItem } from "../../types";

export const eventsData: EventItem[] = [
  {
    day: "25",
    month: "MAY",
    title: "SAC Inauguration 2025",
    location: "Main Auditorium",
    category: "Ceremony",
    image: eventInauguration,
    description:
      "The official opening of the Student Activity Center with club showcases and the lamp lighting ceremony.",
  },
  {
    day: "10",
    month: "JUN",
    title: "Cultural Fest RANG 2025",
    location: "Main Campus Grounds",
    category: "Festival",
    image: eventCultural,
    description:
      "Three days of music, dance, art and food celebrating the culture of every corner of India.",
  },
  {
    day: "18",
    month: "JUL",
    title: "Talent Showcase 2025",
    location: "Open Air Theatre",
    category: "Showcase",
    image: eventTalent,
    description:
      "An open stage where first-year students present the talent they bring to campus.",
  },
];
