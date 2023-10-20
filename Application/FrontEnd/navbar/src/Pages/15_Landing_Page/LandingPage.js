// LandingPage.js
import React from 'react';
import Card from './Card';
import "./LandingPage.css";
import image1 from "../15_Landing_Page/WhatsApp Image 2023-10-17 at 15.55.17_02ea78da.jpg"
import HomeUser1 from "../15_Landing_Page/WhatsApp Image 2023-10-17 at 15.55.16_a54debaf.jpg"
import Ges from "../15_Landing_Page/WhatsApp Image 2023-10-17 at 15.55.17_59909a12.jpg"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LogoutButton from "../../Pages/Login/Logout"


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="card-row">
        <Card
          imageSrc={HomeUser1}
          heading="Edit Home Page Content"
          description="Here you can edit the content of the passage which is displayed in the Home page"
          linkTo="/HomeAdmin"
        />
        <Card
          imageSrc={Ges}
          heading="Edit GES Content"
          description="Here you can add new courses to the resective tables and can edit the previous details of the pages like can changing the co-ordinator"
          linkTo="/GESAdmin"
        />
      </div>
      <div className="card-row">
        <Card
          imageSrc={image1}
          heading="Edit Present Staff Content"
          description="Description for the third card."
          linkTo="/PresentStaffCRUD"
        />
        <Card
          imageSrc={image1}
          heading="Edit Past Staff Content"
          description="Description for the fourth card."
          linkTo="/PastStaffCRUD"
        />
      </div>
      <div className = "card-row">
        
        <Link to='/RegistrationForm' className="blue-link">Register</Link>
        <LogoutButton/>
      </div>
    </div>
  );
};

export default LandingPage;
