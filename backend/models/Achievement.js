import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  campusId: { type: String },
}, { timestamps: true });

export default mongoose.model("Achievement", achievementSchema);
