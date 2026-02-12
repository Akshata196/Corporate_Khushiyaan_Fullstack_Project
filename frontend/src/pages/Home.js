import React from "react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";


function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <PageNavigation />

      {/* HERO SECTION */}
      <section style={heroStyle}>
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Corporate Khushiyaan Logo"
          style={logoStyle}
        />

        <h1 style={heroTitle}>
          Corporate Khushiyaan – The Gift Hub
        </h1>

        <p style={heroText}>
          Premium corporate gifting solutions for employees, clients, and business partners.
        </p>

        <button 
          style={heroButton}
          onClick={() => navigate("/products")}
        >
          Explore Gifts
        </button>

      </section>
      {/* FEATURED PRODUCTS SECTION 👇 ADD HERE */}
      <section style={featuredSection}>
        <h2 style={sectionTitle}>Featured Corporate Gifts</h2>

        <div style={cardGrid}>
          <div style={card}>
            <img src="/products/gift1.jpg" alt="Gift 1" style={cardImage} />
            <h3>Corporate Festive Gift Hamper</h3>
            <p>Premium Diwali gift hamper ideal for corporate clients.</p>
          </div>

          <div style={card}>
            <img src="/products/gift2.jpg" alt="Gift 2" style={cardImage} />
            <h3>Customized Birthday Gift Hamper</h3>
            <p>Personalized Occasional Gift ideal for Clients or Employees</p>
          </div>

          <div style={card}>
            <img src="/products/gift3.jpg" alt="Gift 3" style={cardImage} />
            <h3>Welcome Kit</h3>
            <p>Customized Elegant Welcome Kit for New joinee</p>
          </div>

          <div style={card}>
            <img src="/products/gift4.jpg" alt="Gift 4" style={cardImage} />
            <h3>Diary and Pen Set</h3>
            <p>Customized Gift for Clients or Employees</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={contactSection}>
      <h2 style={contactTitle}>Let’s Work Together</h2>

      <p style={contactText}>
      Looking for bulk corporate gifts or customized solutions?  
      Get in touch with us today.
      </p>

      <a href="/contact" style={contactButton}>
      Contact Us
      </a>
      </section>


    
    </div>   
  );
}

/* ===== STYLES ===== */


const heroStyle = {
  height: "85vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f9f9f9",
  color: "#1f2933",
  textAlign: "center",
  padding: "20px"
};

const logoStyle = {
  width: "120px",
  marginBottom: "25px",
  backgroundColor: "#ffffff",
  padding: "14px",
  borderRadius: "50%",
  boxShadow: "0 6px 18px rgba(0,0,0,0.20)"
};

const heroTitle = {
  fontSize: "3rem",
  marginBottom: "15px"
};

const heroText = {
  fontSize: "1.2rem",
  maxWidth: "600px",
  marginBottom: "25px"
};

const heroButton = {
  padding: "12px 30px",
  fontSize: "1rem",
  backgroundColor: "#d4af37",
  color: "#000",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const featuredSection = {
  padding: "60px 40px",
  backgroundColor: "#ffffff",
  textAlign: "center"
};

const sectionTitle = {
  fontSize: "2.2rem",
  marginBottom: "40px",
  color: "#1f2933"
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const card = {
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
};

const cardImage = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "15px"
};

const contactSection = {
  padding: "70px 30px",
  backgroundColor: "#f9f9f9",
  textAlign: "center"
};

const contactTitle = {
  fontSize: "2rem",
  marginBottom: "20px",
  color: "#1f2933"
};

const contactText = {
  fontSize: "1.1rem",
  maxWidth: "650px",
  margin: "0 auto 30px",
  color: "#555"
};

const contactButton = {
  padding: "12px 35px",
  fontSize: "1rem",
  backgroundColor: "#d4af37",
  color: "#000",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold"
};


export default Home;
