function CustomOrderForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Custom Order</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Order placed! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="orderName" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="orderName" placeholder="Enter your name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="orderProduct" className="form-label">Product</label>
          <select className="form-select" id="orderProduct">
            <option>Choose...</option>
            <option>Amigurumi Toys</option>
            <option>Crochet Roses &amp; Bouquets</option>
            <option>Garments</option>
            <option>Keychains</option>
            <option>Crochet Hand Bags</option>
            <option>Crochet Lilly Flower</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="orderQty" className="form-label">Quantity</label>
          <input type="number" min="1" className="form-control" id="orderQty" placeholder="e.g. 2" required />
        </div>
        <div className="mb-3">
          <label htmlFor="orderDetails" className="form-label">Colour / Size / Special Request</label>
          <textarea className="form-control" id="orderDetails" rows="3" placeholder="e.g. Pink colour, medium size"></textarea>
        </div>
        <button type="submit" className="btn btn-brand">Place Order</button>
      </form>
    </div>
  );
}

export default CustomOrderForm;