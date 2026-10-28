import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { riderLoginAxiosFunction } from "../services/api.js";

const riderLoginSchema = z.object({
  riderId: z.string().trim().min(1, "Rider ID is required"),
  riderPassword: z.string().min(1, "Password is required"),
});

function RiderLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(riderLoginSchema) });

  async function handleRiderLoginSubmit(data) {
    try {
      await riderLoginAxiosFunction(data);
      alert("Rider login successful!");
    } catch (error) {
      console.error("Error logging in rider:", error);
      alert(error.response?.data?.message || "Failed to log in.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Rider Login</h3>
      <form onSubmit={handleSubmit(handleRiderLoginSubmit)}>
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
        <button type="submit" className="btn btn-brand">Login</button>
      </form>
    </div>
  );
}

export default RiderLogin;
