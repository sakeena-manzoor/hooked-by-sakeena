import { Link } from "react-router-dom";

function RiderMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#C87E9E" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Hooked by Sakeena</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#riderMenu"
          aria-controls="riderMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="riderMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/rider-login">Rider Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/update-delivery-status">Update Delivery Status</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/report-issue">Report Issue</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default RiderMenu;
