function ManageOrders() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Admin: Manage Orders</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Order status updated! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="selectOrder" className="form-label">Select Order</label>
          <select className="form-select" id="selectOrder">
            <option>#101 - Ayesha - Amigurumi Toys</option>
            <option>#102 - Hira - Crochet Hand Bags</option>
            <option>#103 - Sana - Sunflower Keychain</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="orderStatus" className="form-label">Order Status</label>
          <select className="form-select" id="orderStatus">
            <option>Pending</option>
            <option>Processing</option>
            <option>Ready for Delivery</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
        <button type="submit" className="btn btn-brand">Update Status</button>
      </form>
    </div>
  );
}

export default ManageOrders;