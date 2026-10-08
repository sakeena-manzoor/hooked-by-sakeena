import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#C87E9E" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Hooked by Sakeena</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminMenu"
          aria-controls="adminMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="adminMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/add-product">Add Product</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/update-product">Update Product</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/delete-product">Delete Product</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/manage-orders">Manage Orders</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminMenu;
