import mongoose from "mongoose";

const riderSchema = new mongoose.Schema({
  riderId: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  passwordSalt: { type: String, required: true },
});

const Rider = mongoose.model("Rider", riderSchema);

export default Rider;
