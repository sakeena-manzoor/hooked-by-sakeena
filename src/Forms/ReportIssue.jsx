function ReportIssue() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Rider: Report Delivery Issue</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Issue reported! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="issueOrder" className="form-label">Order Number</label>
          <input type="text" className="form-control" id="issueOrder" placeholder="e.g. #101" required />
        </div>
        <div className="mb-3">
          <label htmlFor="issueType" className="form-label">Issue Type</label>
          <select className="form-select" id="issueType">
            <option>Customer not available</option>
            <option>Wrong address</option>
            <option>Customer refused order</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="issueDetails" className="form-label">Details</label>
          <textarea className="form-control" id="issueDetails" rows="3" placeholder="Write what happened"></textarea>
        </div>
        <button type="submit" className="btn btn-brand">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportIssue;