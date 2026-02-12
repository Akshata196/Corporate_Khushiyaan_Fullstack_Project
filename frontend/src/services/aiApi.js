import axios from "axios";

const AI_API = axios.create({
  baseURL: "https://corporate-khushiyaan-backend.onrender.com/api/ai"
});

export const sendMessageToAI = (data) => AI_API.post("/chat", data);
