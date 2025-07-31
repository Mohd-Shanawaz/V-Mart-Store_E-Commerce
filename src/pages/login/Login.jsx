import React from "react";
import "./Login.css";
import axios from "axios";
import {useState } from "react";

export default function Login() {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [token,setToken] = useState("");
  const [error,setError] = useState("");

  const handleLogin = async (e)=>{
    e.preventDefault();

    try{
       const res = axios.post('https://fakestoreapi.com/auth/login',
          {
            userName,
            password
          })
          setToken(res.data.token);
          setError("");
          console.log("Token:",setToken);
    }
    catch(error){
      setError("Check Your Credentials");
      setToken("");
      console.log("error ",setError);
    }

  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 style={{ marginBottom: "10px", color: "green" }}>Log In</h2>
        <form className="login-form">
          <input type="text"
           placeholder="Phone number, username, or email" 
           onChange={(e)=>setUserName(e.target.value)}
           required
          />
          <input type="password"
           placeholder="Password"
           onChange={(e)=>setPassword(e.target.value)}
           required
            />
          <button type="button" onClick={handleLogin}>Log In</button>
          {token && <p style={{ color: "green" }}>Login Successful! Token: {token}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
      <div className="signup-box">Don't have an account?  <span><a href="/sign-up">Sign up</a></span>
      </div>
    </div>
  );
}