import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 style={{ marginBottom: "10px", color: "green" }}>Log In</h2>
        <form className="login-form">
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="signup-box">Don't have an account?  <span><a href="/sign-up">Sign up</a></span>
      </div>
    </div>
  );
}


