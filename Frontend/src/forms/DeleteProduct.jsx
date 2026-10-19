import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const deleteProductSchema = z.object({
  deleteProductSelect: z.string().min(1, "Please select a product"),
});

function DeleteProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(deleteProductSchema) });

  function handleDeleteProductSubmit() {
    alert("Product deleted! (demo)");
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Admin: Delete Product</h3>
      <form onSubmit={handleSubmit(handleDeleteProductSubmit)}>
        <div className="mb-3">
          <label htmlFor="deleteProductSelect" className="form-label">Select Product</label>
          <select className="form-select" id="deleteProductSelect" {...register("deleteProductSelect")}>
            <option value="">Choose a product...</option>
            <option>Amigurumi Toys</option>
            <option>Crochet Roses &amp; Bouquets</option>
            <option>Garments</option>
            <option>Bow Keychain</option>
            <option>Crochet Hand Bags</option>
            <option>Sunflower Keychain</option>
            <option>Cherry Keychain</option>
            <option>Crochet Lilly Flower</option>
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
