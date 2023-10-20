import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className = "footer">
        <div className="sb__footer_section ">
            <h2 className= "contact_us">Contact Us</h2>
            <div className = "sb__footer-links">
                <div className = "sb__footer-links-div">
                    <h2>Director</h2>
                    <span>
                    <br></br>
                            <p><b>Dr. Isuru Nawinne</b></p>
                            <p></p>
                            <p>Dept of Computer Engineering,<br></br>Faculty of Engineering,<br></br>University of Peradeniya,<br></br>Sri Lanka.</p>
                        
                    </span>
                </div>
                <div className = "sb__footer-links-div">
                    
                        <br></br>
                        <br></br>
                        
                        <p><b><u>Telephone</u></b></p>
                        <ul>
                            <li>Home:  +94 81 2499199</li>
                            <li>Mobile: +94 81 239 3470</li>
                        </ul>
                        <br></br>
                        <p><b><u>Mail</u></b></p>
                        <ul>
                            <li>direeu@eng.pdn.ac.lk</li>
                            <li>isurunawinne@eng.pdn.ac.lk</li>
                        </ul>
                
                </div>
                <div className = "sb__footer-links-div">
                    <h2>Office</h2>
                        <span>
                            <p><b></b></p>
                            <br></br>
                            <p>Engineering Education Unit,<br></br>Faculty of Engineering,<br></br>University of Peradeniya<br></br>Sri Lanka .</p>
                        </span>
                           
                </div>
                <div className = "sb__footer-links-div">
                    <br></br>
                    <br></br>
                    <b>Contact Office</b>
                    <ul>
                        <li>Phone: +94 81 2393918</li>
                        <li>Office : +94 81 2393304 / +94 81 2393313</li>
                    </ul>
                    
                    
                </div>
            </div>

            <div className = "sb__footer-below">
                <div className = "sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Engineering Education Unit, Faculty of Engineering, University of Peradeniya. All right reserved.
                    </p>
                </div>
                {/*<div className = "sb__footer-below-links">
                    <a href="/terms">
                        <div>
                            <p>
                                Terms & Conditions
                            </p>
                        </div>
                    </a>
                    <a href="/privacy">
                        <div>
                            <p>
                                Privacy
                            </p>
                        </div>
                    </a>
                    <a href="/security">
                        <div>
                            <p>
                                Security
                            </p>
                        </div>
                    </a>
                    <a href="/cookie">
                        <div>
                            <p>
                                Cookie declaration
                            </p>
                        </div>
                    </a>

  </div>*/}
            </div>
        </div>
    </div>
  )
}

export default Footer