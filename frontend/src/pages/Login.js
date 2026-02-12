import React, { useState } from "react";
import { loginUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);

      // Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={input}
        />

        <button type="submit" style={button}>
          Login
        </button>
      </form>
    </div>
  );
}

/* ===== Styles ===== */

const container = {
  minHeight: "100vh",
  paddingTop: "120px",   // pushes content below navbar
  paddingBottom: "80px", // keeps above footer
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};


const form = {
  width: "300px",
  display: "flex",
  flexDirection: "column"
};

const input = {
  padding: "10px",
  marginBottom: "15px"
};

const button = {
  padding: "10px",
  backgroundColor: "#d4af37",
  border: "none",
  cursor: "pointer"
};

export default Login;
