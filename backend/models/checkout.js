import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
  checkoutName: { type: String, required: true },
  checkoutPhone: { type: String, required: true },
  checkoutAddress: { type: String, required: true },
  checkoutPayment: { type: String, required: true },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

export default Checkout;
