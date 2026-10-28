import express from "express";
import {
  reportIssueController,
  riderLoginController,
} from "../controllers/rider_controller.js";
import {
  getOrdersController,
  updateDeliveryStatusController,
} from "../controllers/order_controller.js";

const router = express.Router();

router.post("/login", riderLoginController);
router.get("/orders", getOrdersController);
router.patch("/orders/:id/status", updateDeliveryStatusController);
router.post("/report-issue", reportIssueController);

export default router;
