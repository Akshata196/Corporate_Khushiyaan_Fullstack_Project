
import React, { useEffect, useState } from "react";
import PageNavigation from "../components/PageNavigation";
import { useNavigate } from "react-router-dom";


function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();


  // Load cart from localStorage
  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Increase quantity
  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove product
  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item._id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ⭐ TOTAL CALCULATION (correct position)
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // login for payment
  const handleCheckout = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to continue payment");
    navigate("/login");
    return;
  }

  navigate("/payment");
};


  return (
    <div style={pageStyle}>
      <PageNavigation />

      <h2 style={heading}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} style={card}>
              <img
                src={item.image}
                alt={item.name}
                style={image}
              />

              <div style={info}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>₹ {item.price}</p>

                {/* Quantity Controls */}
                <div style={qtyBox}>
                  <button onClick={() => decreaseQty(item._id)} style={qtyBtn}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item._id)} style={qtyBtn}>+</button>
                </div>

                <button onClick={() => removeItem(item._id)} style={removeBtn}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* ⭐ TOTAL BOX (shown only once) */}
          <div style={totalBox}>
            <h3>Total: ₹ {totalPrice}</h3>
          </div>
          
          <button
            style={checkoutBtn}
            onClick={handleCheckout}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
             Proceed to Payment
          </button>

        </>
      )}
    </div>
  );
}

/* ---------- STYLES ---------- */

const pageStyle = {
  padding: "40px 60px",
  background: "#f3f4f6",
  minHeight: "100vh"
};

const heading = {
  textAlign: "center",
  marginBottom: "30px"
};

const card = {
  display: "flex",
  gap: "20px",
  background: "#1f2933",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "25px",
  alignItems: "center"
};

const image = {
  width: "120px",
  height: "120px",
  objectFit: "cover",
  borderRadius: "8px"
};

const info = {
  flex: 1
};

const qtyBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "10px",
  marginBottom: "10px"
};

const qtyBtn = {
  padding: "5px 10px",
  background: "#d4af37",
  border: "none",
  cursor: "pointer"
};

const removeBtn = {
  background: "#db541a",
  color: "white",
  border: "none",
  padding: "6px 12px",
  cursor: "pointer",
  borderRadius: "5px"
};



const totalBox = {
  background: "#1f2933",
  color: "white",
  padding: "15px",
  width: "260px",
  margin: "25px auto 10px auto",
  textAlign: "center",
  borderRadius: "8px",
  fontWeight: "bold"
};




const checkoutBtn = {
  marginTop: "20px",
  padding: "14px 30px",
  backgroundColor: "#d4af37",
  color: "#000",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "250px",
  textAlign: "center",
  transition: "0.3s"
};


export default Cart;
