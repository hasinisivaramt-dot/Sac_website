const express = require("express");
const cors = require("cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const campusRoutes = require("./routes/campusRoutes");
const eventRoutes = require("./routes/eventRoutes");
const clubRoutes = require("./routes/clubRoutes");
const activityRoutes = require("./routes/activityRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/campuses", campusRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/gallery", galleryRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", service: "KLU SAC Backend API", timestamp: new Date().toISOString() });
});

// 404 & Error Handlers
app.use(notFound);
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`KLU SAC API Server running on port ${PORT}`);
  });
}

module.exports = app;
