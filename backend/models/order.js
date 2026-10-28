import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  productName: { type: String, required: true },
  orderQty: { type: Number, min: 1 },
  orderDetails: { type: String },
  deliveryStatus: {
    type: String,
    enum: ["Pending", "Picked Up", "Out for Delivery", "Delivered"],
    default: "Pending",
  },
  orderStatus: {
    type: String,
    enum: ["Pending", "Processing", "Ready for Delivery", "Delivered", "Cancelled"],
    default: "Pending",
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
