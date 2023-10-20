import React from 'react';
import seminarRoom2Image from './../../img/Seminarroom2_4.JPG'; 
import pic2 from "./../../img/Seminarroom2_1.JPG";
import pic3 from './../../img/Seminarroom2_2.JPG'
import pic4 from './../../img/Seminarroom2_3.JPG'
import pic5 from './../../img/Seminarroom2_5.JPG'

const Seminarroom2 = () => {
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
        alignItems: 'center', // Center the content vertically
    };

    const imageStyle = {
        maxWidth: '50%', // Ensure the image fits within its container
        height: 'auto', // Maintain aspect ratio
        display: 'block', // Remove any extra spacing around the image
        marginRight: '10px',
    };

    return (
        <div style={cardStyle}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>Seminar Room 2</h2>
            <div style={imageContainerStyle}>
                {/* Add the image below the heading */}
                <img src={seminarRoom2Image} alt="Seminar Room 2" style={imageStyle} />
            </div>
            <h3 style={headingStyle}>Facilities</h3>
            {/*<ul>
                <li>Fully air-conditioned room</li>
                <li>Capacity - 85 seats</li>
                <li>Laptop</li>
                <li>Digital White Board with Multimedia Projector</li>
                <li>Motorized Wall Mounted Center Screen</li>
                <li>Multimedia Projector</li>
                <li>Overhead Projector, Screen with stand</li>
                <li>Laser Pointer</li>
                <li>Wall Mounted Fans</li>
                <li>Document Scanner for projection</li>
                <li>White Board</li>
                <li>Wired and wireless sound system</li>
    </ul>*/}
            <ul>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Fully air-conditioned room
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Capacity - 85 seats
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Laptop
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Digital White Board with Multimedia Projector
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Motorized Wall Mounted Center Screen
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Multimedia Projector
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Overhead Projector, Screen with stand
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Laser Pointer
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Wall Mounted Fans
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Document Scanner for projection
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> White Board
                </li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                    <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span> Wired and wireless sound system
                </li>
            </ul>

            <h3 style={headingStyle}>Acknowledgements for improvements</h3>
            <p>Refurbished by E82 Batch</p>
            <p>
                Digital White Board with Multimedia Projector and Document Scanner was
                donated by E97 batch in 2017
            </p>
            <div style={rowStyle}>
                <img src={pic2} alt="Image 1" style={imageStyle} />
                <img src={pic3} alt="Image 2" style={imageStyle} />
            </div>
            <div style={rowStyle}>
                <img src={pic4} alt="Image 3" style={imageStyle} />
                <img src={pic5 } alt="Image 4" style={imageStyle} />
            </div>
        </div>
    );
};

export default Seminarroom2;
