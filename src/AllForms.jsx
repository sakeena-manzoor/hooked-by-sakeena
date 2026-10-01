// ===== CUSTOMER =====
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import CustomOrderForm from './forms/CustomOrderForm';
import CheckoutForm from './forms/CheckoutForm';
import FeedbackForm from './forms/FeedbackForm';

// ===== ADMIN =====
import AddProduct from './forms/AddProduct';
import UpdateProduct from './forms/UpdateProduct';
import DeleteProduct from './forms/DeleteProduct';
import ManageOrders from './forms/ManageOrders';

// ===== RIDER =====
import RiderLogin from './forms/RiderLogin';
import UpdateDeliveryStatus from './forms/UpdateDeliveryStatus';
import ReportIssue from './forms/ReportIssue';

function AllForms() {
  return (
    <div className="container py-5">

      {/* ===== CUSTOMER ===== */}
      {/* <LoginForm /> */}
      <SignupForm />
      {/* <CustomOrderForm /> */}
      {/* <CheckoutForm /> */}
      {/* <FeedbackForm /> */}

      {/* ===== ADMIN ===== */}
      {/* <AddProduct /> */}
      {/* <UpdateProduct /> */}
      {/* <DeleteProduct /> */}
      {/* <ManageOrders /> */}

      {/* ===== RIDER ===== */}
      {/* <RiderLogin /> */}
      {/* <UpdateDeliveryStatus /> */}
      {/* <ReportIssue /> */}

    </div>
  );
}

export default AllForms;