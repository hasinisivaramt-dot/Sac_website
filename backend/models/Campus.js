import mongoose from "mongoose";

const campusSchema = new mongoose.Schema({
  campusId: { type: String },
}, { timestamps: true });

export default mongoose.model("Campus", campusSchema);
