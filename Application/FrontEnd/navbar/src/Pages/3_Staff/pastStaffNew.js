import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pastStaffNew.css";

const PastStaffNew = () => {
  const [pastStaffs, setPastStaffs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/pastStaff/all')
    .then((response) => {
      setPastStaffs(response.data);
    })
  }, []);

  
  const directors = pastStaffs.filter(
    (pastStaff) => pastStaff.roleOnEEUWebsite === "Director"
  );

  const otherStaffs = pastStaffs.filter(
    (pastStaff) => pastStaff.roleOnEEUWebsite !== "Director"
  );
  const cardStyle = {
    /*border: '1px solid #07a8ff',*/
    borderRadius: '8px',
    padding: '20px',
    margin: '20px auto', // Center the card horizontally
    maxWidth: '90%', // Set the card width to 95% of its container
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0', // Set the background color for the card
    lineHeight: 1.5, // Add line spacing of 1.5
    boxSizing: 'border-box', // Include padding and border in the element's total width
  };
  

  return (
    <div className="pastStaff-container" style={cardStyle}>
      <div className="headings-head">
        <h1>Past Staffs</h1>
      </div>
      <br></br>
      <div className="headings">
        <h2>1.Directors</h2>
      </div>
      <br/>
      <div className="director-list-container">
          {directors.map((director) => (
            <div className="director-card" key={director.id}>
              <img src={`data:director/jpeg;base64,${director.image}`} alt="Director_image missing" />
              <div>
                <h2>{director.name}</h2>
                <p>{director.period}</p>
                <p>{director.roleOnEEUWebsite}</p>
              </div>
              <hr style={{width: "90%"}}></hr>
            </div>
          ))}
          
      </div>

      <div className="headings">
        <h2>2. Other Staff Members</h2>
      </div>
      <br/>
      <div className="staff-list-container">
        {otherStaffs.map((staff) => (
          <div className="staff-card" key={staff.id}>
            <img src={`data:staff/jpeg;base64,${staff.image}`} alt="Stafmissingf_image" />
            <div>
              <h2>{staff.name}</h2>
              <p>{staff.period}</p>
              <p>{staff.roleOnEEUWebsite}</p>
            </div>
            <hr style={{width: "90%"}}></hr>
          </div>       
        ))}
        <hr style={{width: "90%"}}></hr>
      </div>
    </div>
  );
};

export default PastStaffNew;
