function AddProduct() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Admin: Add Product</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Product added! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName" placeholder="e.g. Sunflower Keychain" required />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price (Rs.)</label>
          <input type="number" className="form-control" id="productPrice" placeholder="e.g. 600" required />
        </div>
        <div className="mb-3">
          <label htmlFor="productStock" className="form-label">Stock Quantity</label>
          <input type="number" className="form-control" id="productStock" placeholder="e.g. 20" required />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Category</label>
          <select className="form-select" id="productCategory">
            <option>Choose...</option>
            <option>Amigurumi Toys</option>
            <option>Flowers &amp; Bouquets</option>
            <option>Garments</option>
            <option>Keychains</option>
            <option>Hand Bags</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Product Image</label>
          <input type="file" className="form-control" id="productImage" />
        </div>
        <button type="submit" className="btn btn-brand">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;