import PageNavigation from '../components/PageNavigation';


function About() {
  return (
    <div style={pageStyle}>
      <PageNavigation />
      <h2 style={headingStyle}>About Corporate Khushiyaan</h2>

      <p style={textStyle}>
        Corporate Khushiyaan – The Gift Hub is a corporate gifting company
        dedicated to delivering premium and meaningful gift solutions for
        businesses.
      </p>

      <p style={textStyle}>
        We help organizations strengthen relationships with employees,
        clients, and partners through thoughtfully curated and customized
        gifting experiences.
      </p>

      <div style={cardSection}>
        <div style={infoCard}>
          <h3>Our Mission</h3>
          <p>
            To provide high-quality corporate gifting solutions that reflect
            brand value and appreciation.
          </p>
        </div>

        <div style={infoCard}>
          <h3>Our Vision</h3>
          <p>
            To become a trusted corporate gifting partner for organizations
            across industries.
          </p>
        </div>

        <div style={infoCard}>
          <h3>Why Choose Us</h3>
          <p>
            Premium quality, customization, timely delivery, and bulk order
            expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

/* Styles */

const pageStyle = {
  padding: '60px',
  backgroundColor: '#f9fafb',
  minHeight: '80vh',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '32px',
  marginBottom: '30px',
  color: '#1f2933',
};

const textStyle = {
  maxWidth: '900px',
  margin: '0 auto 20px',
  fontSize: '17px',
  color: '#4b5563',
  lineHeight: '1.7',
};

const cardSection = {
  marginTop: '50px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '25px',
};

const infoCard = {
  backgroundColor: '#1f2933',
  color: '#e5e7eb',
  padding: '25px',
  borderRadius: '8px',
};

export default About;
