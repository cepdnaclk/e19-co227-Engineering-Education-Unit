import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registrationError, setRegistrationError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation (e.g., check if passwords match, validate email, etc.)

    try {
      // Send registration data to your backend API
      const response = await axios.post('http://localhost:8080/register', formData);

      // Check the response for success or display an error message if needed
      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful');
        alert('Registration successful');
        navigate('/LandingPage');
      }
      if (response.status === 400) {
        // Handle other status codes as needed
        console.log(response.message);
        alert("User already exists")
      }
    } catch (error) {
      console.error('Registration failed', error);
      setRegistrationError('User already exists');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px', // Changed to pixels
  };

  const cardStyle = {
    width: '352px', // Approximately 22rem
    padding: '16px', // Equivalent to 1rem
    backgroundColor: '#f8f8f8',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px', // Approximately 1.5rem
  };

  const formStyle = {
    marginTop: '16px', // Equivalent to 1rem
  };
  const inputStyle = {
    marginBottom: '16px', // Equivalent to 1rem
    width: '340px', // Approximately 22rem
    padding: '8px', // Equivalent to 0.5rem
    fontSize: '16px', // Approximately 1rem
    border: '1px solid #ccc',
    borderRadius: '3px',
  };
  const passwordInputStyle = {
    width: '340px', // Approximately 22rem
    padding: '8px', // Equivalent to 0.5rem
    fontSize: '16px', // Approximately 1rem
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    width: '360px', // Approximately 22rem
    padding: '8px', // Equivalent to 0.5rem
    fontSize: '16px', // Approximately 1rem
    border: '1px solid #ccc',
    borderRadius: '3px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '3px',
  };

  const navigate = useNavigate();

  return (
    <div style = {containerStyle}>
      <div style = {cardStyle}>
        <h2  style={titleStyle}>Registration</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              style={inputStyle}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              style={inputStyle}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={formData.password}
              style={passwordInputStyle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              id="confirmPassword"
              style={passwordInputStyle}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            Register
          </button>
        </form>
        {registrationError && <p className="text-danger">{registrationError}</p>}
      </div>
    </div>
  );
}

export default RegistrationForm;




/*function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', credentials);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        console.log(response.data.token);
        navigate('/LandingPage');
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px', // Changed to pixels
  };

  const cardStyle = {
    width: '352px', // Approximately 22rem
    padding: '16px', // Equivalent to 1rem
    backgroundColor: '#f8f8f8',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px', // Approximately 1.5rem
  };

  const formStyle = {
    marginTop: '16px', // Equivalent to 1rem
  };

  const inputStyle = {
    marginBottom: '16px', // Equivalent to 1rem
    width: '100%',
    padding: '8px', // Equivalent to 0.5rem
    fontSize: '16px', // Approximately 1rem
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    width: '352px', // Approximately 22rem
    padding: '8px', // Equivalent to 0.5rem
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
  };

  const togglePasswordStyle = {
    position: 'relative',
  };

  const eyeIconStyle = {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const passwordInputStyle = {
    width: '352px', // Approximately 22rem
    padding: '8px', // Equivalent to 0.5rem
    fontSize: '16px', // Approximately 1rem
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3 style={titleStyle}>Login</h3>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <form style={formStyle} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              name="email"
              style={inputStyle}
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={togglePasswordStyle}>
            <label htmlFor="password">Password :</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              style={passwordInputStyle}
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <span style={eyeIconStyle} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '👁️' : '👁️'}
            </span>
          </div>
          <button type="submit" style={buttonStyle}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;*/
