import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">

        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Sign in to your account</p>

        <form className="login-form">

          {/* EMAIL */}
          <label className="label">Email Address</label>
          <input type="email" placeholder="Enter your email" className="input" />

          {/* PASSWORD */}
          <label className="label">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input"
            />
            <span
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot">Forgot password?</a>
          </div>

          {/* BUTTON */}
          <button className="login-btn">Sign In</button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <a href="/register" className="signup-link">
            Sign Up
          </a>
        </p>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* GOOGLE BUTTON */}
        <button className="google-btn">
          <img src="https://www.google.com/favicon.ico" alt="Google" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
