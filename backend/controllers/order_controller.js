import Order from "../models/order.js";

export async function getOrdersController(req, res) {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (error) {
    console.error("Error loading orders:", error);
    return res.status(500).json({ message: "Failed to load orders" });
  }
}

export async function createOrderController(req, res) {
  try {
    const order = await Order.create({
      customerName: req.body.orderName,
      productName: req.body.orderProduct,
      orderQty: req.body.orderQty,
      orderDetails: req.body.orderDetails,
    });
    return res.status(201).json(order);
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json({ message: "Failed to place order" });
  }
}

export async function updateOrderStatusController(req, res) {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus: req.body.orderStatus },
      { new: true, runValidators: true },
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.json(order);
  } catch (error) {
    console.error("Error updating order status:", error);
    return res.status(500).json({ message: "Failed to update order status" });
  }
}

export async function updateDeliveryStatusController(req, res) {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { deliveryStatus: req.body.deliveryStatus },
      { new: true, runValidators: true },
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.json(order);
  } catch (error) {
    console.error("Error updating delivery status:", error);
    return res.status(500).json({ message: "Failed to update delivery status" });
  }
}
