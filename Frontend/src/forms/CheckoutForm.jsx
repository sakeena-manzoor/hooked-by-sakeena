import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { checkoutAxiosFunction } from "../services/api.js";

const checkoutSchema = z.object({
  checkoutName: z.string().trim().min(1, "Full name is required"),
  checkoutPhone: z.string().trim().min(1, "Phone number is required"),
  checkoutAddress: z.string().trim().min(1, "Delivery address is required"),
  checkoutPayment: z.string().min(1, "Please select a payment method"),
});

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(checkoutSchema) });

  async function handleCheckoutSubmit(data) {
    try {
      await checkoutAxiosFunction(data);
      alert("Checkout saved successfully!");
    } catch (error) {
      console.error("Error saving checkout:", error);
      alert(error.response?.data?.message || "Failed to confirm checkout.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Checkout</h3>
      <form onSubmit={handleSubmit(handleCheckoutSubmit)}>
        <div className="mb-3">
          <label htmlFor="checkoutName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="checkoutName" placeholder="Enter your full name" {...register("checkoutName")} />
          {errors.checkoutName && <span className="text-danger">{errors.checkoutName.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="checkoutPhone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="checkoutPhone" placeholder="03XX XXXXXXX" {...register("checkoutPhone")} />
          {errors.checkoutPhone && <span className="text-danger">{errors.checkoutPhone.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="checkoutAddress" className="form-label">Delivery Address</label>
          <input type="text" className="form-control" id="checkoutAddress" placeholder="House no, street, city" {...register("checkoutAddress")} />
          {errors.checkoutAddress && <span className="text-danger">{errors.checkoutAddress.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="checkoutPayment" className="form-label">Payment Method</label>
          <select className="form-select" id="checkoutPayment" {...register("checkoutPayment")}>
            <option value="">Choose a payment method...</option>
            <option>Cash on Delivery</option>
            <option>Bank Transfer</option>
            <option>Easypaisa / JazzCash</option>
          </select>
          {errors.checkoutPayment && <span className="text-danger">{errors.checkoutPayment.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Confirm Order</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
