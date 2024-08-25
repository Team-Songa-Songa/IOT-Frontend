import React, { useState } from "react";
import InputField from "../../Reusable_Components/inputField";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");


  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    if(formData.email === "" ){
      // setEmailError("Email is required");  
      toast.error("Email is required");    
    } else if (formData.password === "") {
      // setPasswordError("Password is required");
      toast.error("Password is required");
    } else {
      toast.success("Login Successful")

      //redirect to /dashboard
      setTimeout(() => {
        navigate("/dashboard");
        
      }, 1000);

    }
  };

  return (
    <section className="registration-form">
      <div className="registration-form-inner flex">
      <img src="/thick-blue-logo.svg" className="h-[60px]" alt="" />
        {/* <h1 className="text-16 font-bold">Login</h1> */}


        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            // required
          />
          {/* <p className="text-red-500 text-[12px]">{emailError}</p> */}

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            // required
          />
          {/* <p className="text-red-500 text-[12px]">{passwordError}</p> */}
          <div className="reg-button">
              <button type="submit">Login</button>
            {/* <Link to="/dashboard">
              <button type="submit">Login</button>
            </Link> */}
          </div>
        </form>


        <p className="text-[13px]">Don't have an account?  
        <a className="text-[#3B82F6] font-semibold" href="/register"> Register Here</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
