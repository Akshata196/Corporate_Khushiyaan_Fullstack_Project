import React, { useState } from "react";
import { registerUser } from "../services/authApi";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
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
      await registerUser(formData);
      alert("Registration successful. Please login.");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div style={container}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} style={form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          style={input}
        />

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
          Register
        </button>
      </form>
    </div>
  );
}

/* ===== Styles ===== */

const container = {
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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

export default Register;
