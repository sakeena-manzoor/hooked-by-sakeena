import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  signupName: { type: String, required: true },
  signupEmail: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  passwordSalt: { type: String, required: true },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
