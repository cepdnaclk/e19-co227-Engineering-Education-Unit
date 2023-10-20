import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PresentStaffCrud.css";
import { Link, useParams, useNavigate } from "react-router-dom";


function PresentStaffCRUD() {
  const [presentStaffs, setPresentStaffs] = useState([]);
  const navigate = useNavigate();
  /*New
  const[selectedPresentStaffs,setSelectedPresentStaffs] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    qualifications: "",
    department: "",
    mobilePhone: "",
    telePhone: "",
    roleInFaculty: "",
    roleOnEEUWebsite: "",
    image: null, // Assuming you want to upload an image
  });
  const [showAddForm, setShowAddForm] = useState(false); */

  useEffect(() => {
    loadPresentStaffs();
  }, []);

  const loadPresentStaffs = async () => {
    const result = await axios.get("http://localhost:8080/presentStaff/all");
    setPresentStaffs(result.data);
  }

  const {id} = useParams();

  const deletePresentStaff = async (id) => {
    await axios.delete(`http://localhost:8080/presentStaff/${id}`);
    loadPresentStaffs();
  };

  /*new*/
 /* const handleAddPresentStaff = async (e) =>{
    
    try {
      const response = await axios.post("http://localhost:8080/presentStaff/add", formData);
      // If you need to inspect the response data:
      console.log("Response data:", response.data);
      loadPresentStaffs();
      setFormData({
        name: "",
        qualifications: "",
        department: "",
        mobilePhone: "",
        telePhone: "",
        roleInFaculty: "",
        roleOnEEUWebsite: "",
        image: null,
      });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error adding present staff:", error);
    }
  };*/
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
   <div className="container-fluid" style = {cardStyle}>
       <nav className="navbar">
        <div className="container-fluid">
          <h3>Present Staff Details</h3>
          
        </div>
      </nav>
      

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">qualifications</th>
              <th scope="col">department</th>
              <th scope="col">Mobile</th>
              <th scope="col">Telephone</th>
              <th scope="col">Role On EEU</th>
              <th scope="col">Role In roleInFaculty</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {presentStaffs.map((presentStaff, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{presentStaff.name}</td>
                <td>{presentStaff.qualifications}</td>
                <td>{presentStaff.department}</td>
                <td>{presentStaff.mobilePhone}</td>
                <td>{presentStaff.telePhone}</td>
                <td>{presentStaff.roleOnEEUWebsite}</td>
                <td>{presentStaff.roleInFaculty}</td>
                <td>
                  {/* Display the image using the <img> tag */}
                  {presentStaff.image && (
                    <img
                      src={`data:image/jpeg;base64,${presentStaff.image}`}
                      alt="Image is missing"
                      width="100"
                      height="100"
                    />
                  )}
                </td>
                <td>
                  <Link className="link-dark" to={`/PresentStaffEdit/${presentStaff.id}`}>
                    <i className="bi bi-pencil-square fs-5 me-3"></i>
                  </Link>
                  <Link className="link-dark" onClick={() => deletePresentStaff(presentStaff.id)}>
                    <i className="bi bi-trash fs-5"></i>
                  </Link>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
        { /* <button onClick={() => setShowAddForm(true)}  style={{
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            marginRight: '5px',
            cursor: 'pointer',
          }}>Add Staff</button>

          {showAddForm && (
            <div className="add-course-popup">
              <h3>Add PresentStaff</h3>
              <form onSubmit={handleAddPresentStaff}>
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) =>
                      setFormData({ ...formData, qualifications: e.target.value })}
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
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobilePhone" className="form-label">
                    Moblie Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobilePhone"
                    name="mobilePhone"
                    value={formData.mobilePhone}
                    onChange={(e) =>
                      setFormData({ ...formData, mobilePhone: e.target.value })}
                    
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
                    onChange={(e) =>
                      setFormData({ ...formData, telePhone: e.target.value })}
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
                    onChange={(e) =>
                      setFormData({ ...formData, roleInFaculty: e.target.value })}
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
                    onChange={(e) =>
                      setFormData({ ...formData, roleOnEEUWebsite: e.target.value })}
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
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.files[0] })}
                  />
                </div>

                <div className="mb-3">
                  <button className="btn btn-primary" type="submit">
                    Add Present Staff
                  </button>
                  <button onClick={() => setShowAddForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
                    )}*/}
                    <br></br>
                    <br></br>
          <Link to="/PresentStaffAdd" className="blue-link">
            Add Present Staff
          </Link>

          <button style = {cancel_buttonStyle} onClick={handleCancel}>
            Cancel
          </button>

    </div>
  );
}

export default PresentStaffCRUD;
