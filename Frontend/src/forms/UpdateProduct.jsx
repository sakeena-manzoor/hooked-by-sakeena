import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const updateProductSchema = z.object({
  selectProduct: z.string().min(1, "Please select a product"),
  newPrice: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({ error: "Price is required" }).positive("Price must be greater than 0"),
  ),
  newQuantity: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({ error: "Quantity is required" })
      .int("Quantity must be a whole number")
      .min(0, "Quantity cannot be negative"),
  ),
});

function UpdateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(updateProductSchema) });

  function handleUpdateProductSubmit() {
    alert("Product updated! (demo)");
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Admin: Update Product</h3>
      <form onSubmit={handleSubmit(handleUpdateProductSubmit)}>
        <div className="mb-3">
          <label htmlFor="selectProduct" className="form-label">Select Product</label>
          <select className="form-select" id="selectProduct" {...register("selectProduct")}>
            <option value="">Choose a product...</option>
            <option>Amigurumi Toys</option>
            <option>Crochet Roses ; Bouquets</option>
            <option>Garments</option>
            <option>Bow Keychain</option>
            <option>Crochet Hand Bags</option>
            <option>Sunflower Keychain</option>
            <option>Cherry Keychain</option>
            <option>Crochet Lilly Flower</option>
          </select>
          {errors.selectProduct && <span className="text-danger">{errors.selectProduct.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="newPrice" className="form-label">New Price (Rs.)</label>
          <input type="number" className="form-control" id="newPrice" placeholder="e.g. 650" {...register("newPrice")} />
          {errors.newPrice && <span className="text-danger">{errors.newPrice.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="newQuantity" className="form-label">New Quantity</label>
          <input type="number" className="form-control" id="newQuantity" placeholder="e.g. 15" {...register("newQuantity")} />
          {errors.newQuantity && <span className="text-danger">{errors.newQuantity.message}</span>}
          <div className="form-text">This will replace the current stock count.</div>
        </div>
        <button type="submit" className="btn btn-brand me-2">Update Product</button>
        <button type="button" className="btn btn-outline-secondary">Cancel</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
