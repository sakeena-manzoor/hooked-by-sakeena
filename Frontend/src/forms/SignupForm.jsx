import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupAxiosFunction } from "../services/api.js";

const signupSchema = z
  .object({
    signupName: z.string().trim().min(1, "Full name is required"),
    signupEmail: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
    signupPassword: z.string().min(1, "Password is required"),
    signupConfirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.signupPassword === data.signupConfirm, {
    message: "Passwords do not match",
    path: ["signupConfirm"],
  });

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  async function handleSignupSubmit(data) {
    try {
      await signupAxiosFunction(data);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error creating account:", error);
      alert(error.response?.data?.message || "Failed to create account.");
    }
  }

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Customer Sign Up</h3>
      <form onSubmit={handleSubmit(handleSignupSubmit)}>
        <div className="mb-3">
          <label htmlFor="signupName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="signupName" placeholder="Enter your full name" {...register("signupName")} />
          {errors.signupName && <span className="text-danger">{errors.signupName.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="signupEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="signupEmail" placeholder="example@gmail.com" {...register("signupEmail")} />
          {errors.signupEmail && <span className="text-danger">{errors.signupEmail.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" {...register("signupPassword")} />
          {errors.signupPassword && <span className="text-danger">{errors.signupPassword.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="signupConfirm" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="signupConfirm" placeholder="Re-enter your password" {...register("signupConfirm")} />
          {errors.signupConfirm && <span className="text-danger">{errors.signupConfirm.message}</span>}
        </div>
        <button type="submit" className="btn btn-brand">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
