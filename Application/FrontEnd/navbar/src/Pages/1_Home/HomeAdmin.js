import React, { Component } from "react";
import axios from 'axios';
import ImageSlidernew from "../../components/ImageSlider/ImageSlidernew"

const cardStyle = {
  borderRadius: '8px',
  padding: '20px',
  margin: '20px auto', // Center the card horizontally
  maxWidth: '100%', // Set the card width to 95% of its container
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

class HomeAdmin extends Component {
  state = {
    value: "Some text here",
    isInEditMode: false,
    code: "Home",
  };

  componentDidMount() {
    axios.get("http://localhost:8080/gettext")
      .then(response => {
        const data = response.data;
        const subjectWithCodeHello = data.find(item => item.code === "Home");

        if (subjectWithCodeHello) {
          this.setState({
            value: subjectWithCodeHello.subject,
          });
        } else {
          console.error("No data found with code 'hello'");
        }
      })
      .catch(error => {
        console.error("Error fetching paragraph:", error);
      });
  }

  updateComponentValue = () => {
    const updatedValue = this.refs.theTextInput.value;

    // Update the state with the new value
    this.setState({
      isInEditMode: false,
      value: updatedValue,
    });

    // Make a PUT request to update the data on the server
    axios.put(`http://localhost:8080/edit/${this.state.code}`, {
      subject: updatedValue, // Assuming subject is the property to be updated
      // Add other properties to update as needed
    })
      .then(response => {
        // Handle the successful response from the server if needed
        console.log("Data updated successfully", response);
      })
      .catch(error => {
        console.error("Error updating data:", error);
      });
  }

  calculateTextareaRows = () => {
    // Calculate the number of rows based on the content's line count
    const lines = this.state.value.split('\n').length;
    return Math.max(lines, 18); // Minimum of 18 rows
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  }

  renderEditView = () => {
    const buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      marginRight: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    return (
        <div style={cardStyle}>
        <div className="home-inner-container">
          <div className="info">
            <div>
              <textarea
                defaultValue={this.state.value}
                ref="theTextInput"
                rows={this.calculateTextareaRows()} // Adjust the number of rows as needed
                cols={190}
                style={textareaStyle} // Apply the defined style here
              />
              <button style={{ ...buttonStyle, backgroundColor: 'red' }} onClick={this.changeEditMode}>Cancel</button>
              <button style={{ ...buttonStyle, backgroundColor: 'green' }} onClick={this.updateComponentValue}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDefaultView = () => {
    const buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      marginRight: '10px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
    };

    return (
      <div>
         <div style={cardStyle}>
          <div className="home-inner-container">
              <ImageSlidernew/>
            <div className="info">
              <textarea
                className="info"
                value={this.state.value}
                rows={this.calculateTextareaRows()} // Adjust the number of rows as needed
                cols={125} // Adjust the number of columns as needed
                readOnly
                style={textareaStyle} // Apply the defined style here
              />
            </div>
            <button style={{ ...buttonStyle }} onClick={this.changeEditMode}>Edit</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView();
  }
}

export default HomeAdmin;
