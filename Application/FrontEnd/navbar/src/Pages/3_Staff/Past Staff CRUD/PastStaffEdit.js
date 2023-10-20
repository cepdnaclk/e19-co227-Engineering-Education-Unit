import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PastStaffEdit.css"; // Make sure to link your CSS file
import { useNavigate, useParams } from "react-router-dom";

const PastStaffEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    qualifications: "",
    department: "",
    mobilePhone: "",
    telePhone: "",
    roleInFaculty: "",
    roleOnEEUWebsite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const loadStaff = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pastStaff/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error loading past staff:", error);
      }
    };

    loadStaff(); // Call the function directly
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/pastStaff/${id}`,
        formData
      );

      console.log(response.data);

      // Redirect to the staff list after successful submission
      navigate('/PastStaffCRUD');
    } catch (error) {
      console.error("Error updating past staff:", error);
    }
  };

  const handleCancel = () => {
    // Use navigate to go back to the previous page
    navigate('/PastStaffCRUD'); 
  };
  const cardStyle = {
    border: '1px solid #07a8ff',
    borderRadius: '8px',
    padding: '20px',
    /*margin: '20px 200px 20px 200px',*/
    margin: '20px auto', // Center the card horizontally
    maxWidth: '600px', // Limit the card width for smaller screens
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0', // Set the background color here
    lineHeight: 1.5, // Add line spacing of 1.5
};
const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  marginRight: '10px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
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


  return (
    <div className="pastStaff-form-container" style = {cardStyle}>
      <div className="pastStaff-form-inner-container">
        <div className="headings">
          <h2>Edit Past Staff</h2>
        </div>
        <br />

        <form onSubmit={handleSubmit} className="Edit-form">
          <div className="content">
            <div className="custom-spacing">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="custom-spacing">
              <label htmlFor="period" className="form-label">
                Period:
              </label>
              <input
                type="text"
                className="form-control"
                id="period"
                name="period"
                value={formData.period}
                onChange={handleChange}
              />
            </div>

            <div className="custom-spacing">
              <label htmlFor="roleOnEEUWebsite" className="form-label">
                Role On EEU Website:
              </label>
              <input
                type="text"
                className="form-control"
                id="roleOnEEUWebsite"
                name="roleOnEEUWebsite"
                value={formData.roleOnEEUWebsite}
                onChange={handleChange}
              />
            </div>

            <div className="custom-spacing">
              <button style = {buttonStyle} type="submit">
                Update Past Staff
              </button>
              <button style = {cancel_buttonStyle} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PastStaffEdit;
