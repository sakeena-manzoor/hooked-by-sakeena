function CheckoutForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Checkout</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Order confirmed! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="checkoutName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="checkoutName" placeholder="Enter your full name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="checkoutPhone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="checkoutPhone" placeholder="03XX XXXXXXX" required />
        </div>
        <div className="mb-3">
          <label htmlFor="checkoutAddress" className="form-label">Delivery Address</label>
          <input type="text" className="form-control" id="checkoutAddress" placeholder="House no, street, city" required />
        </div>
        <div className="mb-3">
          <label htmlFor="checkoutPayment" className="form-label">Payment Method</label>
          <select className="form-select" id="checkoutPayment">
            <option>Cash on Delivery</option>
            <option>Bank Transfer</option>
            <option>Easypaisa / JazzCash</option>
          </select>
        </div>
        <button type="submit" className="btn btn-brand">Confirm Order</button>
      </form>
    </div>
  );
}

export default CheckoutForm;