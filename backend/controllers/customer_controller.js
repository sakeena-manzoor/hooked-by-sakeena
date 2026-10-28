import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import Checkout from "../models/checkout.js";
import Customer from "../models/customer.js";
import Feedback from "../models/feedback.js";

export async function signupController(req, res) {
  try {
    const passwordSalt = randomBytes(16).toString("hex");
    const passwordHash = scryptSync(req.body.signupPassword, passwordSalt, 64).toString("hex");
    const customer = await Customer.create({
      signupName: req.body.signupName,
      signupEmail: req.body.signupEmail.toLowerCase(),
      passwordHash,
      passwordSalt,
    });

    return res.status(201).json({ message: "Account created successfully", id: customer._id });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "An account with this email already exists" });
    }

    console.error("Error creating customer account:", error);
    return res.status(500).json({ message: "Failed to create account" });
  }
}

export async function loginController(req, res) {
  try {
    const customer = await Customer.findOne({ signupEmail: req.body.loginEmail.toLowerCase() });

    if (!customer) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordHash = scryptSync(req.body.loginPassword, customer.passwordSalt, 64);
    const savedHash = Buffer.from(customer.passwordHash, "hex");
    if (savedHash.length !== passwordHash.length || !timingSafeEqual(savedHash, passwordHash)) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.json({ message: "Login successful", name: customer.signupName });
  } catch (error) {
    console.error("Error logging in customer:", error);
    return res.status(500).json({ message: "Failed to log in" });
  }
}

export async function checkoutController(req, res) {
  try {
    const checkout = await Checkout.create(req.body);
    return res.status(201).json(checkout);
  } catch (error) {
    console.error("Error saving checkout:", error);
    return res.status(500).json({ message: "Failed to confirm checkout" });
  }
}

export async function feedbackController(req, res) {
  try {
    const feedback = await Feedback.create(req.body);
    return res.status(201).json(feedback);
  } catch (error) {
    console.error("Error saving feedback:", error);
    return res.status(500).json({ message: "Failed to submit feedback" });
  }
}
