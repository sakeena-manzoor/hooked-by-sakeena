function DeleteProduct() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Admin: Delete Product</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Product deleted! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="deleteProductSelect" className="form-label">Select Product</label>
          <select className="form-select" id="deleteProductSelect">
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
        <div className="alert alert-danger">⚠️ This action cannot be undone!</div>
        <button type="submit" className="btn btn-danger">Delete Product</button>
      </form>
    </div>
  );
}

export default DeleteProduct;
