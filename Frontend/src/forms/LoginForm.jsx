import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginAxiosFunction } from "../services/api.js";

const loginSchema = z.object({
  loginEmail: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  loginPassword: z.string().min(1, "Password is required"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  async function handleLoginSubmit(data) {
    try {
      await loginAxiosFunction(data);
      alert("Login successful!");
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.response?.data?.message || "Failed to log in.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Customer Login</h3>
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="loginEmail" placeholder="example@gmail.com" {...register("loginEmail")} />
          {errors.loginEmail && <span className="text-danger">{errors.loginEmail.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" {...register("loginPassword")} />
          {errors.loginPassword && <span className="text-danger">{errors.loginPassword.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
