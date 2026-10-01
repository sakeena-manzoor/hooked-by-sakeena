function FeedbackForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4">Feedback</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for your feedback! (demo)"); }}>
        <div className="mb-3">
          <label htmlFor="feedbackName" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="feedbackName" placeholder="Enter your name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="feedbackRating" className="form-label">Rating</label>
          <select className="form-select" id="feedbackRating">
            <option>5 - Excellent</option>
            <option>4 - Good</option>
            <option>3 - Okay</option>
            <option>2 - Bad</option>
            <option>1 - Very Bad</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="feedbackComment" className="form-label">Comment</label>
          <textarea className="form-control" id="feedbackComment" rows="3" placeholder="Tell us what you think"></textarea>
        </div>
        <button type="submit" className="btn btn-brand">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;