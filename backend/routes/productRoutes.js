import express from "express";
import {
  deleteProductController,
  getProductsController,
  productController,
  updateProductController,
} from "../controllers/product_controller.js";

const router = express.Router();

router.post("/", productController);
router.get("/", getProductsController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;