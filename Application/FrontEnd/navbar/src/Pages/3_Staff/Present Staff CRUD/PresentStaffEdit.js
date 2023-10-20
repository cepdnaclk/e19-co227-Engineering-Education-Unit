import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const PresentStaffEdit = () => {
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
        const response = await axios.get(`http://localhost:8080/presentStaff/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error loading present staff:", error);
      }
    };
  
    loadStaff(); // Call the function directly
  
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/presentStaff/${id}`,
        formData
      );

      console.log(response.data);

      // Redirect to the staff list after successful submission
      navigate('/PresentStaffCRUD');
    } catch (error) {
      console.error("Error updating present staff:", error);
    }
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
  const handleCancel = () => {
    // Use navigate to go back to the previous page
    navigate('/PresentStaffCRUD'); 
  };

  return (
    <div className="presentStaff-form-container" style={cardStyle}>
      <div className="presentStaff-form-inner-container border shadow">
        <div className="headings">
          <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Edit Present Staff
          </h2>
        </div>
        <br />

        <form onSubmit={handleSubmit} className="Edit-form" style={{ width: "90%", marginLeft: "5%" }}>
          <div className="content">
            <div className="mb-3">
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

            <div className="mb-3">
              <label htmlFor="qualifications" className="form-label">
                Qualifications:
              </label>
              <input
                type="text"
                className="form-control"
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department:
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobilePhone" className="form-label">
                Mobile Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="mobilePhone"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telePhone" className="form-label">
                Telephone:
              </label>
              <input
                type="text"
                className="form-control"
                id="telePhone"
                name="telePhone"
                value={formData.telePhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="roleInFaculty" className="form-label">
                Role In Faculty:
              </label>
              <input
                type="text"
                className="form-control"
                id="roleInFaculty"
                name="roleInFaculty"
                value={formData.roleInFaculty}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
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

            <div className="mb-3">
              <button  type="submit" style = {buttonStyle}>
                Update Present Staff
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

export default PresentStaffEdit;