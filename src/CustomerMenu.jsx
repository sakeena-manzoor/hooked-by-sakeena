import { Link } from "react-router-dom";

function CustomerMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#C87E9E" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Hooked by Sakeena</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#customerMenu"
          aria-controls="customerMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="customerMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/custom-order">Custom Order</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/checkout">Checkout</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/feedback">Feedback</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomerMenu;
