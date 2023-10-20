import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PastStaffCrud.css";
import { Link, useParams,useNavigate } from "react-router-dom";



function PastStaffCRUD() {
  const [pastStaffs, setPastStaffs] = useState([]);
  const navigate = useNavigate();
useEffect(() =>{
  loadPastStaffs();
}, []);

const loadPastStaffs = async () => {
  const result = await axios.get("http://localhost:8080/pastStaff/all");
  setPastStaffs(result.data);
}

const {id} = useParams();

const deletePastStaff = async (id) => {
  await axios.delete(`http://localhost:8080/pastStaff/${id}`);
  loadPastStaffs();
}
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

const cancel_buttonStyle = {
  backgroundColor: '#af0505', // Set the background color to red,
  color: 'white',
  padding: '10px 20px',
  marginRight: '10px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',

};
const handleCancel = () => {
  // Use navigate to go back to the previous page
  navigate('/LandingPage'); 
};


  return (
    <div className="past-staff-crud-container" style={cardStyle}>
      <nav className="navbar">
        <div className="container-fluid">
          <h3>Past Staff Details</h3>
        </div>
      </nav>

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Period</th>
              <th scope="col">Role On EEU</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {pastStaffs.map((pastStaff, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{pastStaff.name}</td>
                <td>{pastStaff.period}</td>
                <td>{pastStaff.roleOnEEUWebsite}</td>
                <td>
                  {/* Display the image using the <img> tag */}
                  {pastStaff.image && (
                    <img
                      src={`data:image/jpeg;base64,${pastStaff.image}`}
                      alt="Image is missing"
                      width="100"
                      height="100"
                    />
                  )}
                </td>
                <td>
                  <Link className="link-dark" to={`/PastStaffEdit/${pastStaff.id}`}>
                    <i className="bi bi-pencil-square fs-5 me-3"></i>
                  </Link>
                  <Link className="link-dark" onClick={() => deletePastStaff(pastStaff.id)}>
                    <i className="bi bi-trash fs-5"></i>
                  </Link>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      <br></br>
                    <br></br>
      <Link to="/PastStaffAdd" className="blue-link">Add Past Staff</Link>
      <button style = {cancel_buttonStyle} onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default PastStaffCRUD;
