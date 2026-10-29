import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import DeliveryIssue from "../models/deliveryIssue.js";
import Rider from "../models/rider.js";

export async function riderSignupController(req, res) {
  const riderId = req.body?.riderId?.trim();
  const riderPassword = req.body?.riderPassword;

  if (!riderId || typeof riderPassword !== "string" || !riderPassword) {
    return res.status(400).json({ message: "Rider ID and password are required" });
  }

  try {
    const passwordSalt = randomBytes(16).toString("hex");
    const passwordHash = scryptSync(riderPassword, passwordSalt, 64).toString("hex");
    const rider = await Rider.create({ riderId, passwordHash, passwordSalt });

    return res.status(201).json({ message: "Rider account created successfully", riderId: rider.riderId });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "A rider account with this ID already exists" });
    }

    console.error("Error creating rider account:", error);
    return res.status(500).json({ message: "Failed to create rider account" });
  }
}

export async function riderLoginController(req, res) {
  try {
    const rider = await Rider.findOne({ riderId: req.body.riderId });

    if (!rider) {
      return res.status(401).json({ message: "Invalid rider ID or password" });
    }

    const passwordHash = scryptSync(req.body.riderPassword, rider.passwordSalt, 64);
    const savedHash = Buffer.from(rider.passwordHash, "hex");
    if (savedHash.length !== passwordHash.length || !timingSafeEqual(savedHash, passwordHash)) {
      return res.status(401).json({ message: "Invalid rider ID or password" });
    }

    return res.json({ message: "Rider login successful", riderId: rider.riderId });
  } catch (error) {
    console.error("Error logging in rider:", error);
    return res.status(500).json({ message: "Failed to log in" });
  }
}

export async function reportIssueController(req, res) {
  try {
    const issue = await DeliveryIssue.create(req.body);
    return res.status(201).json(issue);
  } catch (error) {
    console.error("Error saving delivery issue:", error);
    return res.status(500).json({ message: "Failed to submit report" });
  }
}
