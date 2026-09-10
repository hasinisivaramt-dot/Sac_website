import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  campusId: { type: String },
}, { timestamps: true });

export default mongoose.model("Club", clubSchema);
