function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <div>
          <h3 style={brandStyle}>Corporate Khushiyaan</h3>
          <p style={taglineStyle}>The Gift Hub</p>
        </div>

        <div>
          <p style={linkText}>Home</p>
          <p style={linkText}>About</p>
          <p style={linkText}>Products</p>
          <p style={linkText}>Contact</p>
        </div>
      </div>

      <div style={bottomBar}>
        © {new Date().getFullYear()} Corporate Khushiyaan. All rights reserved.
      </div>
    </footer>
  );
}

/* -------- Styles -------- */

const footerStyle = {
  backgroundColor: '#1f2933',
  color: 'white',
  paddingTop: '40px',
};

const footerContent = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 60px 30px',
  flexWrap: 'wrap',
};

const brandStyle = {
  marginBottom: '5px',
};

const taglineStyle = {
  fontSize: '14px',
  color: '#d1d5db',
};

const linkText = {
  margin: '6px 0',
  color: '#d1d5db',
  cursor: 'pointer',
};

const bottomBar = {
  borderTop: '1px solid #374151',
  textAlign: 'center',
  padding: '15px',
  fontSize: '14px',
  color: '#9ca3af',
};

export default Footer;
