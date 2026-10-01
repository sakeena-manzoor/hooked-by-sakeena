function UpdateProduct() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Admin: Update Product</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Product updated! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="selectProduct" className="form-label">Select Product</label>
          <select className="form-select" id="selectProduct">
            <option>Amigurumi Toys</option>
            <option>Crochet Roses &amp; Bouquets</option>
            <option>Garments</option>
            <option>Bow Keychain</option>
            <option>Crochet Hand Bags</option>
            <option>Sunflower Keychain</option>
            <option>Cherry Keychain</option>
            <option>Crochet Lilly Flower</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="newPrice" className="form-label">New Price (Rs.)</label>
          <input type="number" className="form-control" id="newPrice" placeholder="e.g. 650" />
        </div>
        <div className="mb-3">
          <label htmlFor="newQuantity" className="form-label">New Quantity</label>
          <input type="number" className="form-control" id="newQuantity" placeholder="e.g. 15" />
          <div className="form-text">This will replace the current stock count.</div>
        </div>
        <button type="submit" className="btn btn-brand me-2">Update Product</button>
        <button type="button" className="btn btn-outline-secondary">Cancel</button>
      </form>
    </div>
  );
}

export default UpdateProduct;