import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const manageOrdersSchema = z.object({
  selectOrder: z.string().min(1, "Please select an order"),
  orderStatus: z.string().min(1, "Please select an order status"),
});

function ManageOrders() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(manageOrdersSchema) });

  function handleManageOrdersSubmit() {
    alert("Order status updated! (demo)");
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Admin: Manage Orders</h3>
      <form onSubmit={handleSubmit(handleManageOrdersSubmit)}>
        <div className="mb-3">
          <label htmlFor="selectOrder" className="form-label">Select Order</label>
          <select className="form-select" id="selectOrder" {...register("selectOrder")}>
            <option value="">Choose an order...</option>
            <option>#101 - Ayesha - Amigurumi Toys</option>
            <option>#102 - Hira - Crochet Hand Bags</option>
            <option>#103 - Sana - Sunflower Keychain</option>
          </select>
          {errors.selectOrder && <span className="text-danger">{errors.selectOrder.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="orderStatus" className="form-label">Order Status</label>
          <select className="form-select" id="orderStatus" {...register("orderStatus")}>
            <option value="">Choose a status...</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Ready for Delivery</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          {errors.orderStatus && <span className="text-danger">{errors.orderStatus.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Update Status</button>
      </form>
    </div>
  );
}

export default ManageOrders;
