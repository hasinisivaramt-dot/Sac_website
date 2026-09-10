// Campus switcher configuration

// For production, set these VITE_* variables
// to the deployed campus URLs.

// Local defaults:
// Aziz Nagar  -> http://localhost:5173
// Bachupally  -> http://localhost:5174
// GBS         -> http://localhost:5175

export const CAMPUS_OPTIONS = [
  {
    id: "aziz-nagar",
    name: "Aziz Nagar",
    url: import.meta.env.VITE_AZIZ_NAGAR_URL || "http://localhost:5173",
  },
  {
    id: "bachupally",
    name: "Bachupally",
    url: import.meta.env.VITE_BACHUPALLY_URL || "http://localhost:5174",
  },
  {
    id: "gbs",
    name: "GBS",
    url: import.meta.env.VITE_GBS_URL || "http://localhost:5175",
  },
];

export const getCampusUrl = (campusId) => {
  const campus = CAMPUS_OPTIONS.find(
    (campus) => campus.id === campusId
  );

  return campus?.url || "";
};