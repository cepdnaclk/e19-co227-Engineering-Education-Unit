import React, { useState } from "react";
import "./pastStaffAdd.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PastStaffAdd() {
  let navigate = useNavigate();
  const [pastStaff, setPastStaff] = useState({
    name: "",
    period: "",
    roleOnEEUWebsite: "",
    image: null,
  });

  const HandleInputChange = (e) => {
    const { name, value } = e.target; // Use e.target.name to get the input's name attribute

    setPastStaff({
      ...pastStaff,
      [name]: value, // Use name as the key to update the state
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setPastStaff({
      ...pastStaff,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", pastStaff.name);
    formData.append("period", pastStaff.period);
    formData.append("roleOnEEUWebsite", pastStaff.roleOnEEUWebsite);
    formData.append("image", pastStaff.image);

    try {
      const response = await axios.post(
        "http://localhost:8080/pastStaff/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
        }
      );

      // Handle the response from the backend (e.g., show success message)
      console.log(response.data);

      // Clear the form fields
      setPastStaff({
        name: "",
        period: "",
        roleOnEEUWebsite: "",
        image: null,
      });
      navigate('/PastStaffCRUD')
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error(error);
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
  navigate('/PastStaffCRUD'); 
};

  return (
    <div className="PastStaff-form-container" style = {cardStyle}>
      <div className="headings">
        <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          Add Pastt Staff
        </h2>
      </div>
      <br />
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white shadow rounded"
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={pastStaff.name}
            onChange={HandleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="period" className="form-label">
            Period:
          </label>
          <input
            type="text"
            className="form-control"
            id="period"
            name="period"
            value={pastStaff.period}
            onChange={HandleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="roleOnEEUWebsite" className="form-label">
            Role on EEU Website:
          </label>
          <input
            type="text"
            className="form-control"
            id="roleOnEEUWebsite"
            name="roleOnEEUWebsite"
            value={pastStaff.roleOnEEUWebsite}
            onChange={HandleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>

        <button style={buttonStyle} type="submit">
          Add Past Staff
        </button>
        <button style = {cancel_buttonStyle} onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default PastStaffAdd;
