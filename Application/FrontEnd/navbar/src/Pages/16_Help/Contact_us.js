import React from 'react';

const cardStyle = {
  border: '1px solid #07a8ff',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px auto', // Center the card horizontally
  maxWidth: '800px', // Limit the card width for smaller screens
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f0f0f0', // Set the background color here
  lineHeight: 1.5, // Add line spacing of 1.5
};

const headingStyle = {
  color: '#333', // Customize the heading color
};

const textStyle = {
  color: '#555', // Customize the text color
};

function ContactUs() {
  return (
    <div className="ContactUs-container" style={cardStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <h2 style={headingStyle}>Director</h2>
      <p style={textStyle}>Dr. Isuru Nawinne</p>
      <p style={textStyle}>Dept of Computer Engineering</p>
      <p style={textStyle}>Faculty of Engineering</p>
      <p style={textStyle}>University of Peradeniya</p>
      <p style={textStyle}>Sri Lanka</p>

      <h3 style={headingStyle}>Telephone</h3>
      <p style={textStyle}>Office: +94 (0)81 2393918</p>
      <p style={textStyle}>Mobile: +94 81 239 3470</p>

      <h3 style={headingStyle}>Mail</h3>
      <p style={textStyle}>Email: direeu@eng.pdn.ac.lk</p>
      <p style={textStyle}>Email: isurunawinne@eng.pdn.ac.lk</p>

      <h2 style={headingStyle}>Office</h2>
      <p style={textStyle}>Engineering Education Unit</p>
      <p style={textStyle}>Faculty of Engineering</p>
      <p style={textStyle}>University of Peradeniya</p>
      <p style={textStyle}>Sri Lanka</p>

      <h3 style={headingStyle}>Phone</h3>
      <p style={textStyle}>Phone: +94-81-239-3918</p>

      <h3 style={headingStyle}>Mobile</h3>
      <p style={textStyle}>Office: 081-239-3304/3313</p>

      <h2 style={headingStyle}>WEB</h2>
      <p style={textStyle}>
        <a href="http://eng.pdn.ac.lk/eeu" target="_blank" rel="noopener noreferrer">
          http://eng.pdn.ac.lk/eeu
        </a>
      </p>
    </div>
  );
}

export default ContactUs;
