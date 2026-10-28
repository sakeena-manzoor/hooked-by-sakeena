import mongoose from "mongoose";

const deliveryIssueSchema = new mongoose.Schema({
  issueOrder: { type: String, required: true },
  issueType: { type: String, required: true },
  issueDetails: { type: String, required: true },
});

const DeliveryIssue = mongoose.model("DeliveryIssue", deliveryIssueSchema);

export default DeliveryIssue;
