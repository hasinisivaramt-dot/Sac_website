import clubPhotography from "@/assets/club-photography.jpg";
import clubFilm from "@/assets/club-film.jpg";
import clubDance from "@/assets/club-dance.jpg";
import clubMusic from "@/assets/club-music.jpg";
import clubJournalism from "@/assets/club-journalism.jpg";
import clubLiterature from "@/assets/club-literature.jpg";
import clubArts from "@/assets/club-arts.jpg";
import clubFashion from "@/assets/club-fashion.jpg";
import eventInauguration from "@/assets/event-inauguration.jpg";
import eventCultural from "@/assets/event-cultural.jpg";
import eventTalent from "@/assets/event-talent.jpg";
import visPresident from "@/assets/vis-president.png";
import visHavish from "@/assets/vis-havish.png";
import visPrincipal from "@/assets/vis-principal.png";
import vis4 from "@/assets/vis-4.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";

export const clubs = [
  {
    name: "Photography & Editing",
    icon: "camera",
    image: clubPhotography,
    description: "Frame stories, master light and craft visuals that speak.",
  },
  {
    name: "Film Making",
    icon: "clapperboard",
    image: clubFilm,
    description: "Script, shoot and edit short films with campus crews.",
  },
  {
    name: "Dance",
    icon: "sparkles",
    image: clubDance,
    description: "Classical, contemporary and fusion choreography on stage.",
  },
  {
    name: "Music",
    icon: "music",
    image: clubMusic,
    description: "Bands, vocals and jam sessions across every genre.",
  },
  {
    name: "Journalism",
    icon: "mic",
    image: clubJournalism,
    description: "Report campus life through the student newsroom.",
  },
  {
    name: "Literature",
    icon: "book-open",
    image: clubLiterature,
    description: "Poetry nights, debates, open mics and writing circles.",
  },
  {
    name: "Arts",
    icon: "palette",
    image: clubArts,
    description: "Painting, sketching, murals and installation art.",
  },
  {
    name: "Fashion",
    icon: "shirt",
    image: clubFashion,
    description: "Styling, runway production and design showcases.",
  },
] as const;

export const events = [
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
] as const;

export const competitions = [
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
] as const;

export const achievementStats = [
  { value: 120, suffix: "+", label: "Awards Won" },
  { value: 340, suffix: "+", label: "Competitions Participated" },
  { value: 1500, suffix: "+", label: "Student Achievers" },
  { value: 25, suffix: "", label: "National Recognitions" },
] as const;

export const visionaries = [
  {
    name: "Er. Koneru Satyanarayana",
    role: "President",
    image: visPresident,
    description:
      "Guiding the institution with a vision for world-class education, innovation, and holistic student development.",
  },
  {
    name: "Er. K. Lakshman Havish",
    role: "Vice President",
    image: visHavish,
    description:
      "Inspiring youth leadership, technological advancement, and vibrant campus life initiatives across KL University.",
  },
  {
    name: "Dr. A. Ramakrishna",
    role: "Principal",
    image: visPrincipal,
    description:
      "Fostering academic rigor, student achievements, and active participation in co-curricular excellence at KLH.",
  },
  {
    name: "Dr. B. Padmaja",
    role: "Vice Chancellor",
    image: vis4,
    description:
      "Building meaningful student experiences through engagement, extracurricular excellence, and values that last beyond the classroom.",
  },
] as const;

export const testimonials = [
  {
    name: "Ananya R.",
    club: "Dance Club",
    image: student1,
    quote:
      "SAC gave me the confidence to perform on the biggest stages of the university. I found a second family here.",
    rating: 5,
  },
  {
    name: "Rahul V.",
    club: "Photography Club",
    image: student2,
    quote:
      "From borrowing a camera to leading campus shoots — the mentorship at SAC completely changed my craft.",
    rating: 5,
  },
  {
    name: "Meghana T.",
    club: "Literature Club",
    image: student3,
    quote:
      "Open mic nights taught me to speak my mind. SAC connects people who genuinely want to grow together.",
    rating: 5,
  },
] as const;

import galleryMusic from "@/assets/gallery-music.jpg";

export const galleryImages = [
  { src: clubDance, alt: "Student dance performance on stage" },
  { src: eventCultural, alt: "Cultural festival crowd celebrating at night" },
  { src: galleryMusic, alt: "Live campus music concert performance" },
  { src: clubMusic, alt: "Student performing live music on guitar" },
  { src: galleryWorkshop, alt: "Students painting a mural in an art workshop" },
  { src: eventInauguration, alt: "Inauguration ceremony in the auditorium" },
  { src: clubFashion, alt: "Student fashion show runway" },
  { src: clubArts, alt: "Student artwork presentation" },
  { src: galleryCelebration, alt: "Students celebrating outdoors on campus" },
  { src: clubPhotography, alt: "Student photographer capturing campus moments" },
] as const;

export const clubNames = clubs.map((c) => c.name);
