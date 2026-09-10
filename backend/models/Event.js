import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  campusId: { type: String },
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
