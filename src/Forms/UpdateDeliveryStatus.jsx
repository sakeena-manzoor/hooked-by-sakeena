function UpdateDeliveryStatus() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Rider: Update Delivery Status</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Delivery status updated! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="deliveryOrder" className="form-label">Select Order</label>
          <select className="form-select" id="deliveryOrder">
            <option>#101 - Ayesha - Amigurumi Toys</option>
            <option>#102 - Hira - Crochet Hand Bags</option>
            <option>#103 - Sana - Sunflower Keychain</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="deliveryStatus" className="form-label">Delivery Status</label>
          <select className="form-select" id="deliveryStatus">
            <option>Picked Up</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
          </select>
        </div>
        <button type="submit" className="btn btn-brand">Update Status</button>
      </form>
    </div>
  );
}

export default UpdateDeliveryStatus;