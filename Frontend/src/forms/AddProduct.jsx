import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addProductAxiosFunction } from "../services/api.js";

const productSchema = z.object({
  productName: z.string().trim().min(1, "Product name is required"),
  productPrice: z.number({ error: "Price is required" }).positive("Price must be greater than 0"),
  productStock: z.number({ error: "Stock quantity is required" }).int("Stock quantity must be a whole number").min(0, "Stock quantity cannot be negative"),
  productCategory: z.string().min(1, "Please select a category"),
  productImage: z.any().refine((files) => files?.length > 0, "Product image is required"),
});

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  async function handleProductSubmit(data) {
    try {
      await addProductAxiosFunction(data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert(error.response?.data?.message || "Failed to add product.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Admin: Add Product</h3>
      <form onSubmit={handleSubmit(handleProductSubmit)}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName" placeholder="e.g. Sunflower Keychain" {...register("productName")} />
          {errors.productName && <span className="text-danger">{errors.productName.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price (Rs.)</label>
          <input type="number" className="form-control" id="productPrice" placeholder="e.g. 600" {...register("productPrice", { valueAsNumber: true })} />
          {errors.productPrice && <span className="text-danger">{errors.productPrice.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="productStock" className="form-label">Stock Quantity</label>
          <input type="number" className="form-control" id="productStock" placeholder="e.g. 20" {...register("productStock", { valueAsNumber: true })} />
          {errors.productStock && <span className="text-danger">{errors.productStock.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Category</label>
          <select className="form-select" id="productCategory" {...register("productCategory")}>
            <option value="">Choose...</option>
            <option>Amigurumi Toys</option>
            <option>Flowers; Bouquets</option>
            <option>Garments</option>
            <option>Keychains</option>
            <option>Hand Bags</option>
          </select>
          {errors.productCategory && <span className="text-danger">{errors.productCategory.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Product Image</label>
          <input type="file" className="form-control" id="productImage" {...register("productImage")} />
          {errors.productImage && <span className="text-danger">{errors.productImage.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
