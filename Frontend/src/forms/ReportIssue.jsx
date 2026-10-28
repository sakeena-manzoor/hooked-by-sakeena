import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { reportIssueAxiosFunction } from "../services/api.js";

const reportIssueSchema = z.object({
  issueOrder: z.string().trim().min(1, "Order number is required"),
  issueType: z.string().min(1, "Please select an issue type"),
  issueDetails: z.string().trim().min(1, "Please describe the issue"),
});

function ReportIssue() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(reportIssueSchema) });

  async function handleReportIssueSubmit(data) {
    try {
      await reportIssueAxiosFunction(data);
      alert("Issue reported successfully!");
    } catch (error) {
      console.error("Error reporting delivery issue:", error);
      alert(error.response?.data?.message || "Failed to submit report.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Rider: Report Delivery Issue</h3>
      <form onSubmit={handleSubmit(handleReportIssueSubmit)}>
        <div className="mb-3">
          <label htmlFor="issueOrder" className="form-label">Order Number</label>
          <input type="text" className="form-control" id="issueOrder" placeholder="e.g. #101" {...register("issueOrder")} />
          {errors.issueOrder && <span className="text-danger">{errors.issueOrder.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="issueType" className="form-label">Issue Type</label>
          <select className="form-select" id="issueType" {...register("issueType")}>
            <option value="">Choose an issue type...</option>
            <option>Customer not available</option>
            <option>Wrong address</option>
            <option>Customer refused order</option>
            <option>Other</option>
          </select>
          {errors.issueType && <span className="text-danger">{errors.issueType.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="issueDetails" className="form-label">Details</label>
          <textarea className="form-control" id="issueDetails" rows="3" placeholder="Write what happened" {...register("issueDetails")}></textarea>
          {errors.issueDetails && <span className="text-danger">{errors.issueDetails.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportIssue;
