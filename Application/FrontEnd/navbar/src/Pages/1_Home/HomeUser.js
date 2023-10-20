import React, { Component } from "react";
import "./HomeUser.css";
import axios from 'axios';
import Home1 from './../../img/Home1.jpg'; 
import ImageSlidernew from "../../components/ImageSlider/ImageSlidernew"
import BasicCarousel from "../../components/ImageSlider/ImageSlider"
import MyComponent from './../../components/ImageSlider/ImageSlider';

/*const cardStyle = {
  border: '1px solid #07a8ff',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px auto', // Center the card horizontally
  maxWidth: '100%', // Set the card width to 100% of its container
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1',
  backgroundColor: '#f0f0f0', // Set the background color for the card
  lineHeight: 1.5, // Add line spacing of 1.5
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


const textareaStyle = {
  width: '100%',
  backgroundColor: '#f0f0f0', // Set your desired background color
  border: 'none',
  resize: 'none',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '16px',
  lineHeight: 1.5,
  color: '#000',
  marginTop: '20px',
  marginBottom: '20px',
  marginLeft: '0px',
  marginRight: '20px',
  outline: 'none', // Remove the outline border when focused
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Center the content horizontally
  alignItems: 'center',     // Center the content vertically
};

const imageStyle = {
  maxWidth: '50%', // Ensure the image fits within its container
  height: 'auto',   // Maintain aspect ratio
  display: 'block', // Remove any extra spacing around the image
  marginRight: '10px', // Add margin between images
};
class HomeUser extends Component {
  state = {
    value: "Some text here",
    isInEditMode: false,
    code: "Home"
  }

  componentDidMount() {
    axios.get("http://localhost:8080/gettext")
      .then(response => {
        const data = response.data;
        const subjectWithCodeHello = data.find(item => item.code === "Home");

        if (subjectWithCodeHello) {
          this.setState({
            value: subjectWithCodeHello.subject
          });
        } else {
          console.error("No data found with code 'hello'");
        }
      })
      .catch(error => {
        console.error("Error fetching paragraph:", error);
      });
  }

  

  renderDefaultView = () => {
    return (
      <div>
        
        <div style={cardStyle}>
          <div className="home-inner-container">
            
            <div style={imageContainerStyle}>
              {/* Add the image below the heading */}
              <ImageSlidernew/>
            </div>
            <div className="info">
              <textarea
                className="info"
                value={this.state.value}
                rows={18}
                cols={100}
                readOnly
                style={textareaStyle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView()
  }
}

export default HomeUser;
