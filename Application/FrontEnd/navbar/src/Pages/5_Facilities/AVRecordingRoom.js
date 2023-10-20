import React from 'react';
import seminarRoom1Image from './../../img/Seminarroom2_1.JPG';
import pic1 from "./../../img/AVSTUDIO_1.JPG"
import pic2 from "./../../img/AVSTUDIO_2.JPG"
import pic3 from "./../../img/AVSTUDIO_3.JPG"

const AVRecordingRoom = () => {

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
      <h2 style={{ ...headingStyle, textAlign: 'center' }}>A/V Studio</h2>
      <div style={imageContainerStyle}>
        
        <img src={pic3} alt="A/V Recording" style={imageStyle} />
      </div>
      <h3 style={headingStyle}>Facilities</h3>
      <ul style={{ listStyleType: 'none' }}>
        {/*<li>Sound Proof A/V Studio</li>
        <li>Non-Linear Editing System</li>
        <li>Video Cameras</li>
        <li>Lighting Equipment</li>
  <li>Digital Photographing</li>*/}
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
          <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Sound Proof A/V Studio
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
          <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Non-Linear Editing System
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
          <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Video Cameras
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
          <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Lighting Equipment
        </li>
        <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
          <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Digital Photography
        </li>
      </ul>
      <h3 style={headingStyle}>Acknowledgements for improvements</h3>
      <p>Refurbished by [Insert Batch Name]</p>
      <p>[Insert additional acknowledgements]</p>
      <div style={rowStyle}>
            <img src={pic1} alt="Image 1" style={imageStyle} />
            <img src={pic2} alt="Image 2" style={imageStyle} />
        </div>
        
        
    </div>
  );
};

export default AVRecordingRoom;

/*import React from 'react';
import seminarRoom1Image from './../../img/Seminarroom1_1.jpg';

const AVRecordingRoom = () => {

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

    const listStyle = {
        listStyleType: 'disc',// Remove list bullets
    };

    const listItemStyle = {
        marginBottom: '0.5rem',
        paddingLeft: '0.5rem',
        listStyleType: 'disc',
        color: 'red'
    };

    return (
        <div style={cardStyle}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>A/V Recording</h2>
            <div style={imageContainerStyle}>
                <img src={seminarRoom1Image} alt="A/V Recording" style={imageStyle} />
            </div>
            <h3 style={headingStyle}>Facilities</h3>
            <ul style={listStyle}>
                <li style={listItemStyle}>Sound Proof A/V Studio</li>
                <li style={listItemStyle}>Non-Linear Editing System</li>
                <li style={listItemStyle}>Video Cameras</li>
                <li style={listItemStyle}>Lighting Equipment</li>
                <li style={listItemStyle}>Digital Photographing</li>
            </ul>
            <h3 style={headingStyle}>Acknowledgements for improvements</h3>
            <p>Refurbished by [Insert Batch Name]</p>
            <p>[Insert additional acknowledgements]</p>
            <div style={rowStyle}>
                <img src={seminarRoom1Image} alt="Image 1" style={imageStyle} />
                <img src={seminarRoom1Image} alt="Image 2" style={imageStyle} />
            </div>
            <div style={rowStyle}>
                <img src={seminarRoom1Image} alt="Image 3" style={imageStyle} />
                <img src={seminarRoom1Image} alt="Image 4" style={imageStyle} />
            </div>
        </div>
    );
};

export default AVRecordingRoom;*/

