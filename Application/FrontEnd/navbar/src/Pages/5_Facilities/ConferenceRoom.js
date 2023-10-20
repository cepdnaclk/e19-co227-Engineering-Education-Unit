import React from 'react';

import pic1 from "./../../img/Conferenceroom_1.jpg"
import pic2 from "./../../img/Conferenceroom_2.jpg"
import pic3 from "./../../img/Conferenceroom_3.jpg"
import pic4 from "./../../img/Conferenceroom_4.jpg"
import pic5 from "./../../img/Conferenceroom_5.jpg"


const ConferenceRoom = () => {

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
        color: '#07a8ff',
        
    };
    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Add space between images
        margin: '10px 0', // Add margin between rows
    };
    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center',     // Center the content vertically
    };
    
    const imageStyle = {
        maxWidth: '50%', // Ensure the image fits within its container
        height: 'auto',   // Maintain aspect ratio
        display: 'block', // Remove any extra spacing around the image
        marginRight: '10px',
    };

  return (
    <div style = {cardStyle}>
      <h2 style={{ ...headingStyle, textAlign: 'center' }}>Conference Room</h2>
      <div style={imageContainerStyle}>
        {/* Add the image below the heading */}
        <img src={pic1} alt="Conference Room" style={imageStyle} />
      </div>
      <h3 style={headingStyle}>Facilities</h3>
      {/*<ul>
        <li>Fully air-conditioned room</li>
        <li>Capacity - 28 seats</li>
        <li>Laptop</li>
        <li>Digital White Board with Multimedia Projector</li>
        <li>Laser Pointer</li>
        <li>Podium</li>
        <li>Tele-Conference System</li>
  </ul>*/}
      <ul>
      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Fully air-conditioned room
      </li>
      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Capacity - 28 seats
      </li>
      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Laptop
      </li>
      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Digital White Board with Multimedia Projector
      </li>
      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Laser Pointer
      </li>
      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Podium
      </li>
      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Tele-Conference System
      </li>
    </ul>

      <h3 style={headingStyle}>Acknowledgements for improvements</h3>
      <p>Established by E73 Batch</p>

      <div style={rowStyle}>
            <img src={pic2} alt="Image 1" style={imageStyle} />
            <img src={pic3} alt="Image 2" style={imageStyle} />
        </div>
        <div style={rowStyle}>
            <img src={pic4} alt="Image 3" style={imageStyle} />
            <img src={pic5} alt="Image 4" style={imageStyle} />
        </div>
    </div>
  );
};

export default ConferenceRoom;
