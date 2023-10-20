import React, { useEffect, useState } from 'react'
import './GES.css'
import axios from "axios"
import Alert_Course_Not_Offered_User from './Alert_Course_Not_Offered_User'
import CourseNotOfferedUser from "./Courses_not_offered"


const GES = () => {

  const [courses, setCourses] = useState([])
  const[courses2,setCourses2] = useState([])

  useEffect(() =>{
    loadCourses();
  },[]);

  const loadCourses =async () =>{
    const result=await axios.get("http://localhost:8080/getcourses2");
    setCourses(result.data);
  }

  useEffect(() =>{
    loadCourses2();
  },[]);

  const loadCourses2 =async () =>{
    const result=await axios.get("http://localhost:8080/getcourses");
    setCourses2(result.data);
  }
  const cardStyle = {
    border: '2px solid #07a8ff',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px auto', // Center the card horizontally
    maxWidth: '1400px', // Limit the card width for smaller screens
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff', // Set the background color here
    lineHeight: 1.5, // Add line spacing of 1.5
};
  return (
    <div className = "Section1" style={cardStyle}>
      <h2 className = "heading1">General Elective Subjects</h2>
      <p className = "para1">
        It is the student's responsibility to obtain 12 credits from General elective subjects in order to be qualified for graduation. Out of these 12 credits minimum of 2 credits should be from each category 1,2,3 (Refer to the Faculty Handbook for details)
      </p>
      <br>
      </br>
      <h3 className = "heading2">Categories</h3>
      {/*<ol>
        <li>Management and Economics</li>
        <li>Arts and Humanities</li>
        <li>Political and Social Sciences</li>
  </ol>*/}
      <ol style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
        <li>1. Management and Economics</li>
        <li>2. Arts and Humanities</li>
        <li>3. Political and Social Sciences</li>
      </ol>

      

      <p>
        Therefore students are requested to select courses appropriately in 5,6,7,8 semesters and GE short semester of computer engineering students. Some courses are not offered every semester and some courses are offered in the same slot and the exams also conducted in parallel. Therefore you should not select subjects from the same slot.
        <br></br>
        <br></br>
        Some Departments offers courses contributing to components satisfied by General Electives subjects. Some Departments make some GE subjects compulsory for their students and some GE subjects are not allowed to take. Therefore please follow the guidelines of each department, in addition to the guidelines in the Faculty Hand Book.
      </p>
      <br></br>
      <div className = "Section2" >
        <table className = "Table">
          <thead>
            <tr>
              <th colSpan="11">Management and Economics</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Category</th>
              <th>5/7 Semsester</th>
              <th>6/8 Semster</th>
              <th>CO Short Semester</th>
              <th>Coordinating Dept</th>
              <th>Coordinator</th>
              <th>Lecturer</th>
              
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course,index) =>(
                <tr key = {index}>
                  <td key={index}>{index+1}</td>
                  <td>{course.code}</td>
                  <td>{course.subject}</td>
                  <td>{course.credits}</td>
                  <td>{course.category}</td>
                  <td>{course.semester_5_7}</td>
                  <td>{course.semester_6_8}</td>
                  <td>{course.cO_Short_Semester}</td>
                  <td>{course.coordinating_Dept}</td>
                  <td>{course.coordinator}</td>
                  <td>{course.lecturer}</td>
                </tr>
              ))
            }
          </tbody>  
        </table>
        
        
        <br></br>
        <br></br>
        <table className = "Table">
          <thead>
            <tr>
              <th colSpan="11">Arts and Humanities & Political and Social Sciences</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Category</th>
              <th>5/7 Semsester</th>
              <th>6/8 Semster</th>
              <th>CO Short Semester</th>
              <th>Coordinating Dept</th>
              <th>Coordinator</th>
              <th>Lecturer</th>
            </tr>
          </thead>
          <tbody>
            {
              courses2.map((Course2,index) =>(
                <tr key= {index}>
                  <td key={index}>{index+1}</td>
                  <td>{Course2.code}</td>
                  <td>{Course2.subject}</td>
                  <td>{Course2.credits}</td>
                  <td>{Course2.category}</td>
                  <td>{Course2.semester_5_7}</td>
                  <td>{Course2.semester_6_8}</td>
                  <td>{Course2.cO_Short_Semester}</td>
                  <td>{Course2.coordinating_Dept}</td>
                  <td>{Course2.coordinator}</td>
                  <td>{Course2.lecturer}</td>
                </tr>
              ))
            }
          </tbody>  
        </table>


          

        {/*<p className ="alert"> ! ! ! EF509,EF521,EF524 will not be offered from 2024 onwards. </p>*/}
        <p className = "alert"><Alert_Course_Not_Offered_User/></p>
        
        
        <h3>Special Requirements</h3>
        
       
        <p>
          <ul>
            <li><b>EF528: Introduction to Digital Art</b> - An only a limited number of student will be registered on a first-come-first-served basis</li>
          </ul>  
        </p>
      </div>
      <br></br>
      <div className = "Section3">
        <h3>The List of Courses offered under General Electives in the Past</h3>
        {/*<Courses_not_offered/>*/}
        <CourseNotOfferedUser/>
        
      </div>
    </div>
    
  )
}

export default GES
