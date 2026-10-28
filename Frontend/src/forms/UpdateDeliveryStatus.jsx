import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  getOrdersAxiosFunction,
  updateDeliveryStatusAxiosFunction,
} from "../services/api.js";

const deliveryStatusSchema = z.object({
  deliveryOrder: z.string().min(1, "Please select an order"),
  deliveryStatus: z.string().min(1, "Please select a delivery status"),
});

function UpdateDeliveryStatus() {
  const [orders, setOrders] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(deliveryStatusSchema) });

  useEffect(() => {
    getOrdersAxiosFunction()
      .then((response) => setOrders(response.data))
      .catch((error) => {
        console.error("Error loading orders:", error);
        alert(error.response?.data?.message || "Failed to load orders.");
      });
  }, []);

  async function handleDeliveryStatusSubmit(data) {
    try {
      await updateDeliveryStatusAxiosFunction(data.deliveryOrder, data.deliveryStatus);
      alert("Delivery status updated successfully!");
    } catch (error) {
      console.error("Error updating delivery status:", error);
      alert(error.response?.data?.message || "Failed to update delivery status.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Rider: Update Delivery Status</h3>
      <form onSubmit={handleSubmit(handleDeliveryStatusSubmit)}>
        <div className="mb-3">
          <label htmlFor="deliveryOrder" className="form-label">Select Order</label>
          <select className="form-select" id="deliveryOrder" {...register("deliveryOrder")}>
            <option value="">Choose an order...</option>
            {orders.map((order) => (
              <option key={order._id} value={order._id}>
                #{order._id.slice(-6)} - {order.customerName} - {order.productName}
              </option>
            ))}
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
