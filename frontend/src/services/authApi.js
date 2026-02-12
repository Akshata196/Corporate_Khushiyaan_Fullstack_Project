import axios from "axios";

const API = axios.create({
  baseURL: "https://corporate-khushiyaan-backend.onrender.com/api/auth"
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
