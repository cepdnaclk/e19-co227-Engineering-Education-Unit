/*import React from 'react';


function Development() {
  const activities = [
    "2018 Improving the web to provide educational resources to students",
    "2017-2018 Development of Alumni Management System",
    "2017-2018 Development of Document Archives for the Faculty",
    "2017-2018 Testing of Course Management System for the Faculty",
    "2017 Installing digital whiteboard and tablet units in seminar room 1 and 2 (by E97 Batch)",
    "2017 Fixing Air Conditioning Units for Seminar for A/V Studio",
    "2017 Fixing Air Conditioning Units for Seminar Room 2",
    "2016 Purchasing an amplifier for public addressing system",
    "2016 Rewiring public addressing system by removing hanging wires",
    "2016 Installing speakers and wiring public addressing system for new corridor",
    "2016 Installing a high-intensity multimedia projector for the E.O.E.Pereira Theater",
    "2016 Installing multimedia projectors and screens for lecture rooms 13, 14, 15, 17, 18, 19, 20",
    "2015 Installing sound systems for lecture rooms 12, 13, 14, 15, 16, 17, 18, 19, 20, 21",
    "2015 Installing a high-intensity multimedia projector, two screens, and sound system with wireless microphones for the Drawing Office 1",
    "2015 Purchasing three computers, two laptops, and a printer for seminar rooms and EEU office",
    "2016 Purchasing large whiteboards for seminar room 2 and 3",
    "2016 Establishing a new air-conditioned conference room with digital whiteboard (by E70?? batch)",
    "2015 Fixing illuminated “Lecture In Progress” signboards for Seminar Rooms and Conference Room",
    "2015 Installing multimedia projectors for lecture room 5, 6",
    "2015 Installing sound systems with wireless microphones for lecture room 3, 4, 5, 6",
    "2015 Developing a resource reservation display system",
    "2015 Installing a resource reservation system for reserving the seminar rooms, conference room, labs, lecture rooms, and vehicles",
    "2015 Introducing a calendar system for all the Departments of the Faculty",
    "2014 Improving the EEU Web site",
    "2014 Installing UPS for multimedia projectors of seminar rooms, conference room, and E.O.E. Pereira Theater",
    "2014 Purchasing a portable LED lighting system",
    "2014 Purchasing a Non-Liner Video Editing System",
    "2014 Purchasing Digital Video Camera with accessories"
  ];

  const cardStyle = {
    border: '1px solid #07a8ff',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px auto', // Center the card horizontally
    maxWidth: '800px', // Limit the card width for smaller screens
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0', // Set the background color here
};

  return (
    <div className='Development-container' style = {cardStyle}>
      <h1>Development Activities of EEU</h1>
      <ul style={{ textAlign: 'left' }}>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Development;*/

import React from 'react';


function Development() {
  const activities = [
    "2018 Improving the web to provide educational resources to students",
    "2017-2018 Development of Alumni Management System",
    "2017-2018 Development of Document Archives for the Faculty",
    "2017-2018 Testing of Course Management System for the Faculty",
    "2017 Installing digital whiteboard and tablet units in seminar room 1 and 2 (by E97 Batch)",
    "2017 Fixing Air Conditioning Units for Seminar for A/V Studio",
    "2017 Fixing Air Conditioning Units for Seminar Room 2",
    "2016 Purchasing an amplifier for public addressing system",
    "2016 Rewiring public addressing system by removing hanging wires",
    "2016 Installing speakers and wiring public addressing system for a new corridor",
    "2016 Installing a high-intensity multimedia projector for the E.O.E.Pereira Theater",
    "2016 Installing multimedia projectors and screens for lecture rooms 13, 14, 15, 17, 18, 19, 20",
    "2015 Installing sound systems for lecture rooms 12, 13, 14, 15, 16, 17, 18, 19, 20, 21",
    "2015 Installing a high-intensity multimedia projector, two screens, and a sound system with wireless microphones for the Drawing Office 1",
    "2015 Purchasing three computers, two laptops, and a printer for seminar rooms and EEU office",
    "2016 Purchasing large whiteboards for seminar rooms 2 and 3",
    "2016 Establishing a new air-conditioned conference room with a digital whiteboard (by E70?? batch)",
    "2015 Fixing illuminated “Lecture In Progress” signboards for Seminar Rooms and Conference Room",
    "2015 Installing multimedia projectors for lecture rooms 5, 6",
    "2015 Installing sound systems with wireless microphones for lecture rooms 3, 4, 5, 6",
    "2015 Developing a resource reservation display system",
    "2015 Installing a resource reservation system for reserving the seminar rooms, conference room, labs, lecture rooms, and vehicles",
    "2015 Introducing a calendar system for all the Departments of the Faculty",
    "2014 Improving the EEU Website",
    "2014 Installing UPS for multimedia projectors of seminar rooms, conference room, and E.O.E. Pereira Theater",
    "2014 Purchasing a portable LED lighting system",
    "2014 Purchasing a Non-Linear Video Editing System",
    "2014 Purchasing a Digital Video Camera with accessories"
  ];

  const cardStyle = {
    border: '1px solid #07a8ff',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '1200px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0',
  };

  const headerStyle = {
    color: 'black', // Add the color property to change the text color
  };

  return (
    <div className='Development-container' style={cardStyle}>
      <h1 style={headerStyle}>Development Activities of EEU</h1>
      <br></br>
      <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
        {activities.map((activity, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
            <span style={{ color: 'red', marginRight: '0.5rem' }}>•</span>
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Development;
