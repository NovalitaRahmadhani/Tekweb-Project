import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === formData.email && user.password === formData.password) {
      alert("Login successful!");
      navigate("/welcome");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-200 to-cream-200">
      <div className="bg-white rounded-lg shadow-lg w-[80%] max-w-md p-8">
        <h1 className="text-3xl font-extrabold text-orange-600 mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full mb-4 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full mb-6 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-lg font-semibold w-full hover:from-orange-600 hover:to-orange-500"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-gray-700 text-center">
          Don't have an account?{" "}
          <span
            className="text-orange-600 underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
