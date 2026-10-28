import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  feedbackName: { type: String, required: true },
  feedbackRating: { type: String, required: true },
  feedbackComment: { type: String, required: true },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
