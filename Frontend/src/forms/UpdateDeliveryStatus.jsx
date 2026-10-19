import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const deliveryStatusSchema = z.object({
  deliveryOrder: z.string().min(1, "Please select an order"),
  deliveryStatus: z.string().min(1, "Please select a delivery status"),
});

function UpdateDeliveryStatus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(deliveryStatusSchema) });

  function handleDeliveryStatusSubmit() {
    alert("Delivery status updated! (demo)");
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Rider: Update Delivery Status</h3>
      <form onSubmit={handleSubmit(handleDeliveryStatusSubmit)}>
        <div className="mb-3">
          <label htmlFor="deliveryOrder" className="form-label">Select Order</label>
          <select className="form-select" id="deliveryOrder" {...register("deliveryOrder")}>
            <option value="">Choose an order...</option>
            <option>#101 - Ayesha - Amigurumi Toys</option>
            <option>#102 - Hira - Crochet Hand Bags</option>
            <option>#103 - Sana - Sunflower Keychain</option>
          </select>
          {errors.deliveryOrder && <span className="text-danger">{errors.deliveryOrder.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="deliveryStatus" className="form-label">Delivery Status</label>
          <select className="form-select" id="deliveryStatus" {...register("deliveryStatus")}>
            <option value="">Choose a delivery status...</option>
            <option>Picked Up</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
          </select>
          {errors.deliveryStatus && <span className="text-danger">{errors.deliveryStatus.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Update Status</button>
      </form>
    </div>
  );
}

export default UpdateDeliveryStatus;
