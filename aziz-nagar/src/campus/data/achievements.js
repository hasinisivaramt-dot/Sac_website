const achievementsImg = "/assets/achievements/achievements.jpg";
const eventTalent = "/assets/events/event-talent.jpg";
const clubArts = "/assets/misc/club-arts.jpg";
const clubPhotography = "/assets/misc/club-photography.jpg";
const clubDance = "/assets/misc/club-dance.jpg";
const clubMusic = "/assets/misc/club-music.jpg";
const clubFilm = "/assets/misc/club-film.jpg";
const clubLiterature = "/assets/misc/club-literature.jpg";
export const achievementStats = [{
  index: "01",
  value: 50,
  suffix: "+",
  label: "Awards Won"
}, {
  index: "02",
  value: 25,
  suffix: "+",
  label: "Competitions"
}, {
  index: "03",
  value: 10,
  suffix: "+",
  label: "National Recognitions"
}, {
  index: "04",
  value: 1000,
  suffix: "+",
  label: "Students Impacted"
}];
export const competitionsData = [{
  title: "Arts Competition",
  category: "Visual Arts",
  date: "Registrations open till 12 Sep",
  image: clubArts
}, {
  title: "Photography Competition",
  category: "Visual Media",
  date: "Registrations open till 20 Sep",
  image: clubPhotography
}, {
  title: "Dance Competition",
  category: "Performing Arts",
  date: "Auditions from 28 Sep",
  image: clubDance
}, {
  title: "Music Competition",
  category: "Performing Arts",
  date: "Auditions from 04 Oct",
  image: clubMusic
}, {
  title: "Film Making Competition",
  category: "Cinema",
  date: "Submissions till 15 Oct",
  image: clubFilm
}, {
  title: "Literary Competition",
  category: "Words & Debate",
  date: "Registrations open till 22 Oct",
  image: clubLiterature
}];
export const achievementsData = {
  stats: achievementStats,
  image: achievementsImg,
  talentImage: eventTalent
};