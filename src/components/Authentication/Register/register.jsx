import React, { useState } from "react";
import InputField from "../../Reusable_Components/inputField";
import {useNavigate} from 'react-router-dom';
import "./register.css";
// import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
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

    if(formData.name === "" ){
      // setEmailError("Email is required");  
      toast.error("Name is required");    
    } else if (formData.email === "") {
      // setPasswordError("Password is required");
      toast.error("Email is required");

    } else if( formData.password === "") {
      toast.error("Password is required");

    } else {
      // console.log("Login Successful");
      toast.success("Registration Successful")

      //redirect to /dashboard
      setTimeout(() => {
        navigate("/dashboard");
        
      }, 1000);
    }

  };

  

  return (
    <section className="registration-form">
      <div className="registration-form-inner">
      <img src="/thick-blue-logo.svg" className="h-[60px]" alt="" />

        {/* <h1>Welcome To Your IOT Registration Page</h1> */}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            // required
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            // required
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            // required
          />
          <div className="reg-button">
            {/* <Link to="/login"> */}
              <button type="submit">Register</button>
            {/* </Link> */}
          </div>
        </form>

        <p className="text-[13px]">Already have an account?  
        <a className="text-[#3B82F6] font-semibold" href="/"> Login Here</a>
        </p>
      </div>
    </section>
  );
};

export default Register;
