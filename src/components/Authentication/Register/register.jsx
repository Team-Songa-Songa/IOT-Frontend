import React, { useState } from "react";
import InputField from "../../Reusable_Components/inputField";
import "./register.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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
        <h1>Welcome To Your IOT Registration Page</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
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
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
