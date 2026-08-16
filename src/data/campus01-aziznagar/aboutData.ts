export interface AboutData {
  title: string;
  description: string;
  image: string;
  coreValues: {
    title: string;
    description: string;
  }[];
}

export const aboutData: AboutData = {
  title: "Where Ambition Meets Action",
  description:
    "The Student Activity Center at Aziz Nagar is the heartbeat of non-academic student life. We provide the mentorship, funding, infrastructure, and platform for students to lead.",
  image: "/pictures/campus01-aziznagar/about/about.jpg",
  coreValues: [
    {
      title: "Explore Passions",
      description:
        "Dive into specialized clubs spanning visual arts, competitive computing, music, and social leadership.",
    },
    {
      title: "Engage & Collaborate",
      description:
        "Work on interdisciplinary student teams, organize massive campus fests, and build lifelong networks.",
    },
    {
      title: "Excel Nationally",
      description:
        "Represent KL University at prestigious national hackathons, cultural festivals, and business case arenas.",
    },
  ],
};
