import express from "express";
import {
  checkoutController,
  feedbackController,
  loginController,
  signupController,
} from "../controllers/customer_controller.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/checkout", checkoutController);
router.post("/feedback", feedbackController);

export default router;
