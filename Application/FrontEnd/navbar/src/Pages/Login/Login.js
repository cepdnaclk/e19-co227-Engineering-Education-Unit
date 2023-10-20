import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
{/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
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
    marginTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
  };

  const cardStyle = {
    width: '20rem',
    padding: '1rem',
  };

  const titleStyle = {
    textAlign: 'center',
  };

  const formStyle = {
    marginTop: '1rem',
  };

  const inputStyle = {
    marginBottom: '1rem',
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '80%',
    padding: '0.5rem',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    justifyContent: 'center',
  };

  const togglePasswordStyle = {
    position: 'relative',
  };

  const eyeIconStyle = {
    position: 'absolute',
    top: '50%',
    right: '20px',
    top: '20px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const passwordInputStyle = {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
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

export default Login;



function Login() {
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
    height: '100vh',
  };

  const cardStyle = {
    width: '22rem',
    backgroundColor: '#f8f8f8',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
  };

  const formStyle = {
    marginTop: '1rem',
  };

  const inputStyle = {
    marginBottom: '1rem',
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.5rem',
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
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
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

export default Login;*/}

function Login() {
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
      const response = await axios.post('http://localhost:8080/authenticate', credentials);

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
    height: '400px', // Changed to pixels
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

  const togglePasswordStyle = {
    position: 'relative',
  };

  const eyeIconStyle = {
    position: 'absolute',
    right: '10px',
    top: '65%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const passwordInputStyle = {
    width: '340px', // Approximately 22rem
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
          <br></br>
          <button type="submit" style={buttonStyle}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

