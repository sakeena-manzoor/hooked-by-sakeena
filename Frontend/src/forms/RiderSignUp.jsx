import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { riderSignupAxiosFunction } from "../services/api.js";

const riderSignUpSchema = z.object({
  riderId: z.string().trim().min(1, "Rider ID is required"),
  riderPassword: z.string().min(1, "Password is required"),
});

function RiderSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(riderSignUpSchema) });

  async function handleRiderSignUpSubmit(data) {
    try {
      await riderSignupAxiosFunction(data);
      alert("Rider account created successfully!");
    } catch (error) {
      console.error("Error creating rider account:", error);
      alert(error.response?.data?.message || "Failed to create rider account.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Rider Sign Up</h3>
      <form onSubmit={handleSubmit(handleRiderSignUpSubmit)}>
        <div className="mb-3">
          <label htmlFor="riderId" className="form-label">Rider ID</label>
          <input type="text" className="form-control" id="riderId" placeholder="e.g. RD-01" {...register("riderId")} />
          {errors.riderId && <span className="text-danger">{errors.riderId.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="riderPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="riderPassword" placeholder="Enter your password" {...register("riderPassword")} />
          {errors.riderPassword && <span className="text-danger">{errors.riderPassword.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Sign Up</button>
      </form>
    </div>
  );
}

export default RiderSignUp;
