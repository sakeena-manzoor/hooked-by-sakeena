import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { feedbackAxiosFunction } from "../services/api.js";

const feedbackSchema = z.object({
  feedbackName: z.string().trim().min(1, "Your name is required"),
  feedbackRating: z.string().min(1, "Please select a rating"),
  feedbackComment: z.string().trim().min(1, "Please enter a comment"),
});

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(feedbackSchema) });

  async function handleFeedbackSubmit(data) {
    try {
      await feedbackAxiosFunction(data);
      alert("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert(error.response?.data?.message || "Failed to submit feedback.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Feedback</h3>
      <form onSubmit={handleSubmit(handleFeedbackSubmit)}>
        <div className="mb-3">
          <label htmlFor="feedbackName" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="feedbackName" placeholder="Enter your name" {...register("feedbackName")} />
          {errors.feedbackName && <span className="text-danger">{errors.feedbackName.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="feedbackRating" className="form-label">Rating</label>
          <select className="form-select" id="feedbackRating" {...register("feedbackRating")}>
            <option value="">Choose a rating...</option>
            <option>5 - Excellent</option>
            <option>4 - Good</option>
            <option>3 - Okay</option>
            <option>2 - Bad</option>
            <option>1 - Very Bad</option>
          </select>
          {errors.feedbackRating && <span className="text-danger">{errors.feedbackRating.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="feedbackComment" className="form-label">Comment</label>
          <textarea className="form-control" id="feedbackComment" rows="3" placeholder="Tell us what you think" {...register("feedbackComment")}></textarea>
          {errors.feedbackComment && <span className="text-danger">{errors.feedbackComment.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
