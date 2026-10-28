import Product from "../models/product.js";

export async function productController(req, res) {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ message: "Failed to add product" });
  }
}

export async function getProductsController(req, res) {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.error("Error loading products:", error);
    return res.status(500).json({ message: "Failed to load products" });
  }
}

export async function updateProductController(req, res) {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productPrice: req.body.productPrice,
        productStock: req.body.productStock,
      },
      { new: true, runValidators: true },
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ message: "Failed to update product" });
  }
}

export async function deleteProductController(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Failed to delete product" });
  }
}