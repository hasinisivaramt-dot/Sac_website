export interface CampusAnnouncementItem {
  id: string;
  campusId: "campus01";
  title: string;
  date: string;
  category: "General" | "Club Registration" | "Auditions" | "Urgent";
  content: string;
  link?: string;
  isImportant?: boolean;
}

export const announcementsData: CampusAnnouncementItem[] = [
  {
    id: "az-ann-1",
    campusId: "campus01",
    title: "SAC Club Registrations for Academic Year 2025–26 Now Open",
    date: "May 20, 2025",
    category: "Club Registration",
    content: "All undergraduate and postgraduate students at Aziz Nagar are invited to register for up to 2 student clubs through the SAC portal.",
    isImportant: true,
  },
  {
    id: "az-ann-2",
    campusId: "campus01",
    title: "Auditions for University Dance & Music Bands",
    date: "May 28, 2025",
    category: "Auditions",
    content: "Open auditions will be held in the SAC Amphitheatre from 4:00 PM onwards. Bring your instruments or backing tracks.",
    isImportant: false,
  },
];
