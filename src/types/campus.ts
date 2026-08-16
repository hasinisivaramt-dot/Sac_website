export type CampusId = "aziz-nagar" | "bachupally" | "gbs";

export interface Visionary {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface GalleryItem {
  id?: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  aspectClass?: string;
  date?: string;
  description?: string;
}

export interface EventItem {
  id?: string;
  day: string;
  month: string;
  year?: string;
  title: string;
  location: string;
  category: string;
  image: string;
  time?: string;
  description: string;
  registrationOpen?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  frequency: string;
  participants: string;
  description: string;
  badge: string;
}

export interface CompetitionItem {
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface AchievementStat {
  index?: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  club: string;
  image: string;
  quote: string;
  rating: number;
}

export interface ClubItem {
  id?: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  category?: string;
  lead?: string;
  membersCount?: number;
  featuredProject?: string;
}

export interface CampusContact {
  location: string;
  address: string;
  email: string;
  phone: string;
}

export interface CampusAboutPillar {
  title: string;
  desc: string;
  icon?: any;
}

export interface PrincipalInfo {
  campusId: CampusId | string;
  name: string;
  designation: string;
  degree: string;
  image: string;
  message: string[];
  quote: string;
  highlights: string[];
}

export interface CampusData {
  principal: any;
  stats: any;
  location: any;
  address: any;
  email: any;
  phone: any;
  id: CampusId;
  name: string;
  shortName: string;
  fullName: string;
  tagline?: string;
  badge?: string;
  themeColor?: string;
  accentColor?: string;

  hero: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    image: string;
  };

  about: {
    label?: string;
    title: string;
    description: string;
    image: string;
    pillars?: CampusAboutPillar[];
  };

  visionaries: Visionary[];
  gallery: GalleryItem[];
  events: EventItem[];
  activities?: ActivityItem[];
  competitions: CompetitionItem[];
  achievements: {
    stats: AchievementStat[];
    image?: string;
    talentImage?: string;
  };
  statistics: {
    students: number;
    events: number;
    achievements: number;
    clubs?: number;
  };
  impactStats: ImpactStat[];
  studentCouncil?: {
    title: string;
    description: string;
    image: string;
  };
  testimonials: TestimonialItem[];
  clubs: ClubItem[];
  contact: CampusContact;
}
