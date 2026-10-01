function RiderLogin() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Rider Login</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Rider login successful! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="riderId" className="form-label">Rider ID</label>
          <input type="text" className="form-control" id="riderId" placeholder="e.g. RD-01" required />
        </div>
        <div className="mb-3">
          <label htmlFor="riderPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="riderPassword" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn btn-brand">Login</button>
      </form>
    </div>
  );
}

export default RiderLogin;