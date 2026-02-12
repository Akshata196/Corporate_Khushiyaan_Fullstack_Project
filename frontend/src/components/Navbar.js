import { Link, useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      {/* Brand Section */}
      <div>
        <h2 style={brandStyle}>Corporate Khushiyaan</h2>
        <span style={taglineStyle}>The Gift Hub</span>
      </div>

      {/* Navigation Links */}
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>


        {!token ? (
  <>
    <button
      onClick={() => navigate("/login")}
      style={authButton}
    >
      Login
    </button>

    <button
      onClick={() => navigate("/register")}
      style={authButtonPrimary}
    >
      Register
    </button>
  </>
) : (
  <button
    onClick={handleLogout}
    style={authButtonPrimary}
  >
    Logout
  </button>
)}

      </div>
    </nav>
  );
}

const navStyle = {
  padding: '18px 40px',
  backgroundColor: '#1f2933', // professional charcoal
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const brandStyle = {
  margin: 0,
  fontWeight: '700',
  letterSpacing: '1px',
};

const taglineStyle = {
  fontSize: '12px',
  color: '#d1d5db',
  letterSpacing: '1px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '25px',
  fontWeight: '500',
};

const authButton = {
  marginLeft: "20px",
  padding: "8px 18px",
  borderRadius: "20px",
  border: "1px solid #d4af37",
  backgroundColor: "transparent",
  color: "#d4af37",
  cursor: "pointer",
  fontWeight: "600",
  transition: "all 0.3s ease"
};

const authButtonPrimary = {
  ...authButton,
  backgroundColor: "#d4af37",
  color: "#000",
  border: "none"
};


export default Navbar;
