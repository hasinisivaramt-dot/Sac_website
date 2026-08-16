export interface ClubItem {
  id: string;
  campusId: "campus01";
  name: string;
  category: "Creative Arts" | "Performing Arts" | "Media & Tech" | "Literary" | "Management" | "Innovation";
  icon: string;
  image: string;
  lead: string;
  membersCount: number;
  description: string;
  featuredProject: string;
}

export const aziznagarClubs: ClubItem[] = [
  {
    id: "az-photography",
    campusId: "campus01",
    name: "Photography & Editing Club",
    category: "Media & Tech",
    icon: "camera",
    image: "/pictures/aziznagar/clubs/club-1.jpg",
    lead: "Rahul Varma (IV Year CSE)",
    membersCount: 180,
    description: "Master lighting, professional framing, color grading, and documentary visual storytelling across university festivals.",
    featuredProject: "Campus 360 Visual Archive 2025",
  },
  {
    id: "az-film",
    campusId: "campus01",
    name: "Film Making & Cinematography",
    category: "Creative Arts",
    icon: "clapperboard",
    image: "/pictures/aziznagar/clubs/club-2.jpg",
    lead: "Sneha Reddy (III Year ECE)",
    membersCount: 140,
    description: "Scriptwriting, 4K production, drone videography, sound engineering, and short film screenings.",
    featuredProject: "National Student Short Film Fest Winner",
  },
  {
    id: "az-dance",
    campusId: "campus01",
    name: "Dance & Choreography Club",
    category: "Performing Arts",
    icon: "sparkles",
    image: "/pictures/aziznagar/clubs/club-3.jpg",
    lead: "Ananya Rao (IV Year AI)",
    membersCount: 220,
    description: "Classical Bharatanatyam, contemporary lyrical, hip-hop, and dynamic fusion choreography on national stages.",
    featuredProject: "Tarangini Dance Fest Champions",
  },
  {
    id: "az-music",
    campusId: "campus01",
    name: "Music & Band Society",
    category: "Performing Arts",
    icon: "music",
    image: "/pictures/aziznagar/clubs/club-4.jpg",
    lead: "Karthik Sharma (III Year Mech)",
    membersCount: 195,
    description: "Rock bands, acoustic ensembles, classical Carnatic recitals, and campus open jamming sessions.",
    featuredProject: "KL Acoustic Unplugged Album Vol. 4",
  },
  {
    id: "az-journalism",
    campusId: "campus01",
    name: "Campus Journalism & Editorial",
    category: "Media & Tech",
    icon: "mic",
    image: "/pictures/aziznagar/clubs/club-5.jpg",
    lead: "Priya Nair (III Year English)",
    membersCount: 110,
    description: "Investigative campus reporting, monthly print chronicles, podcast productions, and media relations.",
    featuredProject: "The KLH Chronicle Monthly Issue",
  },
  {
    id: "az-literature",
    campusId: "campus01",
    name: "Literature & Debating Society",
    category: "Literary",
    icon: "book-open",
    image: "/pictures/aziznagar/clubs/club-6.jpg",
    lead: "Meghana Talluri (IV Year IT)",
    membersCount: 130,
    description: "Parliamentary debates, poetry slams, book discussions, and national model UN delegation training.",
    featuredProject: "KLH Youth Parliament 2025",
  },
  {
    id: "az-arts",
    campusId: "campus01",
    name: "Fine Arts & Mural Design",
    category: "Creative Arts",
    icon: "palette",
    image: "/pictures/aziznagar/clubs/club-7.jpg",
    lead: "Deepak Choudhury (III Year Civil)",
    membersCount: 160,
    description: "Canvas painting, charcoal sketching, sustainable installations, and architectural campus murals.",
    featuredProject: "Aziz Nagar Eco-Art Walkway Project",
  },
  {
    id: "az-fashion",
    campusId: "campus01",
    name: "Fashion & Runway Guild",
    category: "Creative Arts",
    icon: "shirt",
    image: "/pictures/aziznagar/clubs/club-8.jpg",
    lead: "Riya Kapoor (II Year Design)",
    membersCount: 125,
    description: "Apparel design, styling showcases, sustainable upcycling, and annual ethnic runway productions.",
    featuredProject: "Vogue Heritage Runway 2025",
  },
];
