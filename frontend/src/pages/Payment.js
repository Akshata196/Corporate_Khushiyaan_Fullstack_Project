import React from "react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

function Payment() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handlePayment = () => {
    alert("Payment Successful 🎉");

    // clear cart after payment
    localStorage.removeItem("cart");

    navigate("/");
  };

  return (
    <div style={page}>
      <PageNavigation />

      <h2>Payment Summary</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} style={card}>
              <img src={item.image} alt={item.name} style={image} />

              <div>
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}

          <div style={totalBox}>
            <h3>Total Amount: ₹ {totalPrice}</h3>
          </div>

          <button style={payBtn} onClick={handlePayment}>
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}

/* -------- Styles -------- */

const page = {
  padding: "40px",
  minHeight: "100vh",
  background: "#f9fafb"
};

const card = {
  display: "flex",
  gap: "20px",
  background: "#1f2933",
  color: "white",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px"
};

const image = {
  width: "90px",
  height: "90px",
  objectFit: "cover",
  borderRadius: "8px"
};

const totalBox = {
  marginTop: "25px",
  padding: "15px",
  backgroundColor: "#d4af37",
  color: "#000",
  borderRadius: "8px",
  fontWeight: "bold",
  textAlign: "center",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto"
};

const payBtn = {
  marginTop: "20px",
  padding: "14px 25px",
  backgroundColor: "#1f2933",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "250px"
};

export default Payment;
