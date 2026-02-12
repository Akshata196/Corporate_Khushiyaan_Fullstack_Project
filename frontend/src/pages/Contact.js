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

      <div style={gridStyle}>
        
        {/* LEFT INFO */}
        <div>
          
          <h2 style={headingStyle}>Get in Touch</h2>
          <p style={textStyle}>
            Reach out to us for customized corporate gifting solutions and bulk
            orders.
          </p>

          <p><strong>Email:</strong> corporate.khushiyaan@gmail.com</p>
          <p><strong>Phone:</strong> +91 9XXXXXXXXX</p>
          <p><strong>Location:</strong> India</p>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
}

/* Styles */

const pageStyle = {
  padding: '60px',
  minHeight: '80vh',
  backgroundColor: '#f9fafb',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '50px',
  maxWidth: '1000px',
  margin: '0 auto',
};

const headingStyle = {
  color: '#1f2933',
  marginBottom: '15px',
};

const textStyle = {
  color: '#4b5563',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

export default Contact;
