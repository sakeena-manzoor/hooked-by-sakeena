import { createBrowserRouter } from "react-router-dom";
import AdminMenu from "./AdminMenu.jsx";
import CustomerMenu from "./CustomerMenu.jsx";
import Home from "./assets/Home.jsx";
import AddProduct from "./forms/AddProduct.jsx";
import CheckoutForm from "./forms/CheckoutForm.jsx";
import CustomOrderForm from "./forms/CustomOrderForm.jsx";
import DeleteProduct from "./forms/DeleteProduct.jsx";
import FeedbackForm from "./forms/FeedbackForm.jsx";
import LoginForm from "./forms/LoginForm.jsx";
import ManageOrders from "./forms/ManageOrders.jsx";
import ReportIssue from "./forms/ReportIssue.jsx";
import RiderLogin from "./forms/RiderLogin.jsx";
import RiderSignUp from "./forms/RiderSignUp.jsx";
import SignupForm from "./forms/SignupForm.jsx";
import UpdateDeliveryStatus from "./forms/UpdateDeliveryStatus.jsx";
import UpdateProduct from "./forms/UpdateProduct.jsx";
import RiderMenu from "./RiderMenu.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/admin", element: <AdminMenu /> },
  { path: "/add-product", element: <><AdminMenu /><div className="container py-5"><AddProduct /></div></> },
  { path: "/update-product", element: <><AdminMenu /><div className="container py-5"><UpdateProduct /></div></> },
  { path: "/delete-product", element: <><AdminMenu /><div className="container py-5"><DeleteProduct /></div></> },
  { path: "/manage-orders", element: <><AdminMenu /><div className="container py-5"><ManageOrders /></div></> },
  { path: "/customer", element: <CustomerMenu /> },
  { path: "/login", element: <><CustomerMenu /><div className="container py-5"><LoginForm /></div></> },
  { path: "/signup", element: <><CustomerMenu /><div className="container py-5"><SignupForm /></div></> },
  { path: "/custom-order", element: <><CustomerMenu /><div className="container py-5"><CustomOrderForm /></div></> },
  { path: "/checkout", element: <><CustomerMenu /><div className="container py-5"><CheckoutForm /></div></> },
  { path: "/feedback", element: <><CustomerMenu /><div className="container py-5"><FeedbackForm /></div></> },
  { path: "/rider", element: <RiderMenu /> },
  { path: "/rider-login", element: <><RiderMenu /><div className="container py-5"><RiderLogin /></div></> },
  { path: "/rider-signin", element: <><RiderMenu /><div className="container py-5"><RiderSignUp /></div></> },
  { path: "/rider-signup", element: <><RiderMenu /><div className="container py-5"><RiderSignUp /></div></> },
  { path: "/update-delivery-status", element: <><RiderMenu /><div className="container py-5"><UpdateDeliveryStatus /></div></> },
  { path: "/report-issue", element: <><RiderMenu /><div className="container py-5"><ReportIssue /></div></> },
]);
