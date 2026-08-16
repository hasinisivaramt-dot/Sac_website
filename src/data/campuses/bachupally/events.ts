import eventInauguration from "@/assets/event-inauguration.jpg";
import eventCultural from "@/assets/event-cultural.jpg";
import eventTalent from "@/assets/event-talent.jpg";
import type { EventItem } from "../../types";

export const eventsData: EventItem[] = [
  {
    day: "12",
    month: "AUG",
    title: "Bachupally CodeFest 2025",
    location: "Tech Innovation Hub",
    category: "Hackathon",
    image: eventInauguration,
    description:
      "36-hour continuous software sprint featuring industry mentors, prize tracks, and startup incubators.",
  },
  {
    day: "28",
    month: "SEP",
    title: "InnovateX Tech Symposium",
    location: "Campus Seminar Hall",
    category: "Conference",
    image: eventCultural,
    description:
      "Panel discussions on AI, Cloud architectures, and student research paper presentations.",
  },
  {
    day: "15",
    month: "OCT",
    title: "Ignite Talent Carnival",
    location: "Open Arena",
    category: "Showcase",
    image: eventTalent,
    description:
      "Inter-branch celebration of performing arts, coding challenges, and cultural music.",
  },
];
