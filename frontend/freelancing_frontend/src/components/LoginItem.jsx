import { Link } from "react-router-dom";
import "./LoginItem.css"

export default function LoginItem({
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
}) {
  return (
    <div className="login-container">
    <div className="card">
      <h1>Log in</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
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
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      <p className="switch">
        Don’t have an account?{" "}
        <Link to="/register">Sign up</Link>
      </p>
    </div>
    </div>
  );
}