import mongoose from "mongoose";

const competitionSchema = new mongoose.Schema({
  campusId: { type: String },
}, { timestamps: true });

export default mongoose.model("Competition", competitionSchema);
