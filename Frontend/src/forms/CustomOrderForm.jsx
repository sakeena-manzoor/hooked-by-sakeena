import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { placeOrderAxiosFunction } from "../services/api.js";

const customOrderSchema = z.object({
  orderName: z.string().trim().min(1, "Your name is required"),
  orderProduct: z.string().min(1, "Please select a product"),
  orderQty: z.number({ error: "Quantity is required" }).int("Quantity must be a whole number").min(1, "Quantity must be at least 1"),
  orderDetails: z.string().trim().min(1, "Please enter your special request"),
});

function CustomOrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(customOrderSchema) });

  async function handleCustomOrderSubmit(data) {
    try {
      await placeOrderAxiosFunction(data);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert(error.response?.data?.message || "Failed to place order.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Custom Order</h3>
      <form onSubmit={handleSubmit(handleCustomOrderSubmit)}>
        <div className="mb-3">
          <label htmlFor="orderName" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="orderName" placeholder="Enter your name" {...register("orderName")} />
          {errors.orderName && <span className="text-danger">{errors.orderName.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="orderProduct" className="form-label">Product</label>
          <select className="form-select" id="orderProduct" {...register("orderProduct")}>
            <option value="">Choose...</option>
            <option>Amigurumi Toys</option>
            <option>Crochet Roses &amp; Bouquets</option>
            <option>Garments</option>
            <option>Keychains</option>
            <option>Crochet Hand Bags</option>
            <option>Crochet Lilly Flower</option>
          </select>
          {errors.orderProduct && <span className="text-danger">{errors.orderProduct.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="orderQty" className="form-label">Quantity</label>
          <input type="number" min="1" className="form-control" id="orderQty" placeholder="e.g. 2" {...register("orderQty", { valueAsNumber: true })} />
          {errors.orderQty && <span className="text-danger">{errors.orderQty.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="orderDetails" className="form-label">Colour / Size / Special Request</label>
          <textarea className="form-control" id="orderDetails" rows="3" placeholder="e.g. Pink colour, medium size" {...register("orderDetails")}></textarea>
          {errors.orderDetails && <span className="text-danger">{errors.orderDetails.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Place Order</button>
      </form>
    </div>
  );
}

export default CustomOrderForm;
