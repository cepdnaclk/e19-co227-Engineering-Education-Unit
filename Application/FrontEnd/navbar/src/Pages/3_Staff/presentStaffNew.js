import React, { useEffect, useState } from "react";
import axios from "axios";
import "./presentStaffNew.css";

const PresentStaffNew = () => {
  const [presentStaffs, setPresentStaffs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/presentStaff/all')
    .then((response) => {
      setPresentStaffs(response.data);
    })   
  }, []);

  const directors = presentStaffs.filter(
    (presentStaff) => presentStaff.roleOnEEUWebsite === "Director"
  );

  const otherStaffs = presentStaffs.filter(
    (presentStaff) => presentStaff.roleOnEEUWebsite !== "Director"
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
    
        <div className="presentStaff-container" style={cardStyle}>
        <div className="headings">
            <h2>Director</h2>
        </div><br/>
        <div className="director-list-container">
            {directors.map((director) => (
                <div className="director-card" key={director.id}>
                <img src={`data:director/jpeg;base64,${director.image}`} />
                <div>
                    <h2>{director.name}</h2>
                    <p>{director.qualifications}</p>
                    <p>{director.department}</p>
                    <p>Mobile: {director.mobilePhone}</p>
                    <p>Telephone: {director.telePhone}</p>
                    <p>{director.roleInFaculty}</p>
                </div>
                </div>
            ))}
            <hr style={{width: "90%"}}></hr>
        </div>

        
        <div className="headings">
            <h2>Other Staff Members</h2>
        </div><br/>
        <div className="staff-list-container">
            {otherStaffs.map((staff) => (
            <div className="staff-card" key={staff.id}>
                <img src={`data:staff/jpeg;base64,${staff.image}`} />
                <div>
                    <h2> {staff.name}</h2>
                    <p>{staff.qualifications}</p>
                    <p>{staff.department}</p>
                    <p>Mobile: {staff.mobilePhone}</p>
                    <p>Telephone: {staff.telePhone}</p>
                    <p>{staff.roleInFaculty}</p>
                    <p>{staff.roleOnEEUWebsite}</p>
                </div>
                <hr style={{width: "90%", color: 'red'}}></hr>
            </div>       
            ))}
            <hr style={{width: "90%"}}></hr>
        </div>
        </div>
  );
};

export default PresentStaffNew;
