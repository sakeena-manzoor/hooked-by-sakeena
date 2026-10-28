import express from "express";
import {
  createOrderController,
  getOrdersController,
  updateDeliveryStatusController,
  updateOrderStatusController,
} from "../controllers/order_controller.js";

const router = express.Router();

router.post("/", createOrderController);
router.get("/", getOrdersController);
router.patch("/:id/delivery-status", updateDeliveryStatusController);
router.patch("/:id/status", updateOrderStatusController);

export default router;
