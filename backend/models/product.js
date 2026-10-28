import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true, min: 0.01 },
  productStock: { type: Number, required: true, min: 0 },
  productCategory: { type: String, required: true },
  productImage: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;