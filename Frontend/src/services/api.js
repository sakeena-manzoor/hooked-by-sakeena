import axios from "axios";

export async function addProductAxiosFunction(data) {
  console.log("addProductAxiosFunction called");
  const productData = {
    ...data,
    productImage: data.productImage[0].name,
  };
  return await axios.post("http://localhost:3000/add_product", productData);
}

export async function getProductsAxiosFunction() {
  return await axios.get("http://localhost:3000/add_product");
}

export async function updateProductAxiosFunction(id, data) {
  return await axios.patch(`http://localhost:3000/add_product/${id}`, data);
}

export async function deleteProductAxiosFunction(id) {
  return await axios.delete(`http://localhost:3000/add_product/${id}`);
}

export async function getOrdersAxiosFunction() {
  return await axios.get("http://localhost:3000/orders");
}

export async function updateOrderStatusAxiosFunction(id, orderStatus) {
  return await axios.patch(`http://localhost:3000/orders/${id}/status`, { orderStatus });
}

export async function signupAxiosFunction(data) {
  return await axios.post("http://localhost:3000/customers/signup", data);
}

export async function loginAxiosFunction(data) {
  return await axios.post("http://localhost:3000/customers/login", data);
}

export async function placeOrderAxiosFunction(data) {
  return await axios.post("http://localhost:3000/orders", data);
}

export async function checkoutAxiosFunction(data) {
  return await axios.post("http://localhost:3000/customers/checkout", data);
}

export async function feedbackAxiosFunction(data) {
  return await axios.post("http://localhost:3000/customers/feedback", data);
}

export async function riderLoginAxiosFunction(data) {
  return await axios.post("http://localhost:3000/riders/login", data);
}

export async function updateDeliveryStatusAxiosFunction(id, deliveryStatus) {
  return await axios.patch(`http://localhost:3000/riders/orders/${id}/status`, { deliveryStatus });
}

export async function reportIssueAxiosFunction(data) {
  return await axios.post("http://localhost:3000/riders/report-issue", data);
}