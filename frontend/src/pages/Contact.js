import { useState } from 'react';
import { sendEnquiry } from '../services/api';
import PageNavigation from '../components/PageNavigation';

function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEnquiry(formData)
      .then(() => {
        alert('Enquiry submitted successfully');
        setFormData({ companyName: '', email: '', message: '' });
      })
      .catch(() => alert('Error submitting enquiry'));
  };

  return (
    <div style={pageStyle}>
      <PageNavigation />

      <div style={container}>
        <div style={gridStyle}>
          
          {/* LEFT INFO */}
          <div style={infoCard}>
            <h2 style={headingStyle}>Contact Corporate Khushiyaan</h2>
            
            <p style={textStyle}>
              We specialize in premium corporate gifting for employees,
              clients, and business partners. Reach out for bulk orders,
              festive gifting, and custom branding solutions.
            </p>

            <div style={contactBlock}>
              <p><strong>Email</strong></p>
              <p style={contactText}>corporate.khushiyaan@gmail.com</p>
            </div>

            <div style={contactBlock}>
              <p><strong>Phone</strong></p>
              <p style={contactText}>+91 9XXXXXXXXX</p>
            </div>

            <div style={contactBlock}>
              <p><strong>Location</strong></p>
              <p style={contactText}>India</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} style={formCard}>
            <h3 style={formHeading}>Send Enquiry</h3>

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Tell us your requirement..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
            />

            <button type="submit" style={buttonStyle}>
              Submit Enquiry
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const pageStyle = {
  padding: '60px 20px',
  backgroundColor: '#f3f4f6',
  minHeight: '100vh',
};

const container = {
  maxWidth: '1100px',
  margin: '0 auto',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '40px',
};

const infoCard = {
  background: 'white',
  padding: '35px',
  borderRadius: '12px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
};

const headingStyle = {
  fontSize: '28px',
  marginBottom: '15px',
  color: '#1f2933',
};

const textStyle = {
  color: '#4b5563',
  marginBottom: '25px',
  lineHeight: '1.6',
};

const contactBlock = {
  marginBottom: '15px',
};

const contactText = {
  color: '#374151',
};

const formCard = {
  background: '#1f2933',
  padding: '35px',
  borderRadius: '12px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const formHeading = {
  color: 'white',
  marginBottom: '10px',
  fontSize: '22px',
};

const inputStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: 'none',
  fontSize: '14px',
};

const textareaStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: 'none',
  fontSize: '14px',
};

const buttonStyle = {
  marginTop: '10px',
  padding: '12px',
  backgroundColor: '#d4af37',
  color: '#000',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  fontSize: '15px',
};

export default Contact;
