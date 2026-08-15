// Central campus configuration.
// Swap `imageSeed` values for real photo paths under public/pictures/<campus>/...
// once photography is available. Every component reads from this file so the
// same UI serves all three campuses.
export const campusData = {
  aziznagar: {
    id: 'aziznagar',
    name: 'Aziznagar',
    fullName: 'KLH University — Aziznagar Campus',
    tagline: 'Where the Deccan skyline meets ambition.',
    heroImageSeed: 'aziznagar-hero',
    principal: {
      name: 'Dr. Ramesh K. Aditya',
      designation: 'Principal, Aziznagar Campus',
      imageSeed: 'aziznagar-principal',
    },
    admins: [
      { name: 'Prof. Kavita Rao', role: 'Dean, Student Affairs' },
      { name: 'Mr. Suresh Nair', role: 'SAC Coordinator' },
    ],
  },
  bachupally: {
    id: 'bachupally',
    name: 'Bachupally',
    fullName: 'KLH University — Bachupally Campus',
    tagline: 'Tradition and technology, side by side.',
    heroImageSeed: 'bachupally-hero',
    principal: {
      name: 'Dr. Meera S. Prasad',
      designation: 'Principal, Bachupally Campus',
      imageSeed: 'bachupally-principal',
    },
    admins: [
      { name: 'Prof. Anil Deshmukh', role: 'Dean, Student Affairs' },
      { name: 'Ms. Farha Sultana', role: 'SAC Coordinator' },
    ],
  },
  gbs: {
    id: 'gbs',
    name: 'GBS',
    fullName: 'KLH University — GBS Campus',
    tagline: 'A newer chapter, the same standard of excellence.',
    heroImageSeed: 'gbs-hero',
    principal: {
      name: 'Dr. Vijay Chandran',
      designation: 'Principal, GBS Campus',
      imageSeed: 'gbs-principal',
    },
    admins: [
      { name: 'Prof. Lakshmi Iyer', role: 'Dean, Student Affairs' },
      { name: 'Mr. Arjun Reddy', role: 'SAC Coordinator' },
    ],
  },
};

export const defaultCampus = 'aziznagar';
export const campusList = Object.values(campusData);
