import React, { useState } from "react";
import InputField from "../../Reusable_Components/inputField";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <section className="registration-form">
      <div className="registration-form-inner">
        <h1>Your IOT Login Page</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <div className="reg-button">
            <Link to="/dashboard">
              <button type="submit">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
