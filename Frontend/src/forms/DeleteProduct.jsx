import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  deleteProductAxiosFunction,
  getProductsAxiosFunction,
} from "../services/api.js";

const deleteProductSchema = z.object({
  deleteProductSelect: z.string().min(1, "Please select a product"),
});

function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(deleteProductSchema) });

  useEffect(() => {
    getProductsAxiosFunction()
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error("Error loading products:", error);
        alert(error.response?.data?.message || "Failed to load products.");
      });
  }, []);

  async function handleDeleteProductSubmit(data) {
    try {
      await deleteProductAxiosFunction(data.deleteProductSelect);
      setProducts((currentProducts) =>
        currentProducts.filter((product) => product._id !== data.deleteProductSelect),
      );
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert(error.response?.data?.message || "Failed to delete product.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Admin: Delete Product</h3>
      <form onSubmit={handleSubmit(handleDeleteProductSubmit)}>
        <div className="mb-3">
          <label htmlFor="deleteProductSelect" className="form-label">Select Product</label>
          <select className="form-select" id="deleteProductSelect" {...register("deleteProductSelect")}>
            <option value="">Choose a product...</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>{product.productName}</option>
            ))}
          </select>
          {errors.deleteProductSelect && <span className="text-danger">{errors.deleteProductSelect.message}</span>}
        </div>
        <div className="alert alert-danger">Warning: This action cannot be undone!</div>
        <button type="submit" className="btn btn-danger">Delete Product</button>
      </form>
    </div>
  );
}

export default DeleteProduct;
