import React, { useState } from "react";
import { sendMessageToAI } from "../services/aiApi";
import { FaMicrophone } from "react-icons/fa";


function ChatWindow({ onClose }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const sendMessage = async () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!message.trim()) return;

    const userMsg = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setMessage("");

    try {
       const res = await sendMessageToAI({
         message,
         history: messages,
         cart
       });


       const aiMsg = {
         text: res.data.reply,
         sender: "ai"
       };

       setMessages((prev) => [...prev, aiMsg]);

      } catch (error) {
        setMessages((prev) => [
           ...prev,
           { text: "AI not responding", sender: "ai" }
           ]);
        }
  };


const startVoice = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice not supported in this browser");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  setIsRecording(true);   // 🔴 start glow

  recognition.start();

  recognition.onresult = (event) => {
    const voiceText = event.results[0][0].transcript;
    setMessage(voiceText);
    setIsRecording(false);   // stop glow
  };

  recognition.onerror = () => {
    setIsRecording(false);
  };

  recognition.onend = () => {
    setIsRecording(false);
  };
};




  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <span>🤖 AI Assistant</span>
        <button onClick={onClose} style={closeBtn}>X</button>
      </div>

      {/* Messages */}
      <div style={chatBody}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...msgStyle,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#4f46e5" : "#f3f4f6",

              color: msg.sender === "user" ? "white" : "black"
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={inputArea}>
         <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                 sendMessage();
              }
            }}
            placeholder="Ask about gifts..."
            style={input}
         />


        <button
           onClick={startVoice}
           style={{
               ...micBtn,
               backgroundColor: isRecording ? "#ef4444" : "#4f46e5",
               boxShadow: isRecording
                 ? "0 0 12px rgba(239,68,68,0.7)"
                 : "none"
           }}
        >
           <FaMicrophone />
        </button>



        <button onClick={sendMessage} style={sendBtn}>Send</button>
       </div>

    </div>
  );
}

/* Styles */

const container = {
  position: "fixed",
  bottom: "100px",
  right: "25px",
  width: "300px",
  height: "400px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  zIndex: 999
};

const header = {
  backgroundColor: "#4f46e5",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const closeBtn = {
  background: "none",
  border: "none",
  color: "white",
  fontSize: "16px",
  cursor: "pointer"
};

const chatBody = {
  flex: 1,
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  overflowY: "auto"
};

const msgStyle = {
  padding: "8px 12px",
  borderRadius: "10px",
  maxWidth: "75%"
};

const inputArea = {
  display: "flex",
  borderTop: "1px solid #ddd"
};

const input = {
  flex: 1,
  padding: "10px",
  border: "none",
  outline: "none"
};

const sendBtn = {
  backgroundColor: "#54b3eb",
  color: "white",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer"
};

const micBtn = {
  color: "white",
  border: "none",
  padding: "10px 12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  borderRadius: "6px"
};



export default ChatWindow;
