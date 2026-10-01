function SignupForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Customer Sign Up</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Account created! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="signupName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="signupName" placeholder="Enter your full name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="signupEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="signupEmail" placeholder="example@gmail.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" required />
        </div>
        <div className="mb-3">
          <label htmlFor="signupConfirm" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="signupConfirm" placeholder="Re-enter your password" required />
        </div>
        <button type="submit" className="btn btn-brand">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;