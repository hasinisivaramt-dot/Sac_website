import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  campusId: { type: String },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
