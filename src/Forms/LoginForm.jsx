function LoginForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Customer Login</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Login successful! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="loginEmail" placeholder="example@gmail.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn btn-brand">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;