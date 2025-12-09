import React, { useState } from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-page">
      <div className="register-box">

        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join Glamora Beauty today</p>

        <form className="form">

          {/* Two Inputs in One Row */}
          <div className="row-group">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First name" />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last name" />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="terms">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>

          {/* Button */}
          <button className="submit-btn">Create Account</button>
        </form>

        {/* Footer */}
        <p className="login-text">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
