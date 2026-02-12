import React from "react";

function ChatButton({ onClick }) {
  return (
    <div style={chatStyle} onClick={onClick}>
      🤖

    </div>
  );
}

const chatStyle = {
  position: "fixed",
  bottom: "25px",
  right: "25px",
  width: "60px",
  height: "60px",
  backgroundColor: "#4c286c",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  zIndex: 999
};

export default ChatButton;
