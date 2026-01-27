import { Link } from "react-router-dom";
import "./RegisterItem.css"

export default function RegisterItem({
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    successMessage,
}) {
  return (
    <div className="register-container">
    <div className="card">
      <h1>Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        { successMessage && <p style={{color:"green"}}>{successMessage}</p>}
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
            type="username"
            name="username"
            placeholder="Create Username"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Create Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="button"
          >
            {isLoading ? "..." : "Sign Up"}
          </button>
        </form>
      <p className="switch">
        Already have an account?{" "}
        <Link to="/">Login</Link>
      </p>
    </div>
    </div>
  );
}
