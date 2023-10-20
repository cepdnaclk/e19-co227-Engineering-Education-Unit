import React from 'react'
import './Teal1.css'

const Teal1 = () => {
    const cardStyle = {
        border: '1px solid #07a8ff',
        borderRadius: '8px',
        padding: '20px',
        /*margin: '20px 200px 20px 200px',*/
        margin: '20px auto', // Center the card horizontally
        maxWidth: '800px', // Limit the card width for smaller screens
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f0f0f0', // Set the background color here
        lineHeight: 1.5, // Add line spacing of 1.5
        
    };
  return (
    <div className = 'Main' style = {cardStyle}>
        <h2 className = 'Heading'>TEAL2.O Support and Development Centre</h2>
        <p classname = "p1">The TEAL2.O project is implemented by a consortium of 11 universities from Sri Lanka, India, Thailand, Italy, Norway and Romania, joined by a private company from Bulgaria. The project seeks to improve access to Science and Technology higher education and reach underrepresented and disadvantaged groups. We believe this goal can be achieved by investing more effort into Open and Distance Learning. We are aware of the various obstacles faced by remote learning at low-resource institutions due to quality issues, lack of experience and technology, and lack of collaboration and internationalization. The project proposes a comprehensive technological solution - an open-access platform for technology-enhanced learning environments.</p>
        
        <br></br>
        <p className = "p2">The platform will be maintained, exploited and disseminated by the TEAL2.O support and development centre under the Engineering Education Unit of the Faculty of Engineering of the University of Peradeniya.</p>
    </div>
  )
}

export default Teal1