// Card.js
/*import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Card = ({ imageSrc, heading, description, linkTo }) => {
  return (
    <div className="card">
      <h2>{heading}</h2>
      <img src={imageSrc} alt="Card Image" />
      <p>{description}</p>
      <Link to={linkTo}>EDIT</Link>
    </div>
  );
};

export default Card;*/
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Card = ({ imageSrc, heading, description, linkTo }) => {
  const linkStyle = {
    color: 'blue', // Set the text color to blue
    border: '1px solid blue', // Add a 1px solid blue border
    padding: '5px 10px', // Add padding to make it visually appealing
    textDecoration: 'none', // Remove the default underline for links
    display: 'inline-block', // Set it to inline-block to apply the styles
    borderRadius: '5px',
  };

  return (
    <div className="card">
      <h2>{heading}</h2>
      <img src={imageSrc} alt="Card Image" />
      <p>{description}</p>
      <Link to={linkTo} style={linkStyle}>
        EDIT
      </Link>
    </div>
  );
};

export default Card;
