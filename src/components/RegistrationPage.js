import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-200 to-cream-200">
      <div className="flex bg-white rounded-lg shadow-lg w-[80%] max-w-4xl overflow-hidden">
        <div className="w-1/2 bg-orange-100 flex items-center justify-center">
          <img
            src={require("../assets/images/with-animals.jpg")}
            alt="Happy pets"
            className="w-3/4 h-auto"
          />
        </div>
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-extrabold text-orange-600 mb-6">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="block w-full mb-4 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
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
              className="block w-full mb-4 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full mb-6 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-lg font-semibold w-full hover:from-orange-600 hover:to-orange-500"
              type="submit"
            >
              Register
            </button>
          </form>
          <p className="mt-6 text-gray-700">
            Already have an account?{" "}
            <span
              className="text-orange-600 underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
