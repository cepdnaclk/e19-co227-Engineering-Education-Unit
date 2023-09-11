import React from "react";
import "./Appbar.css";
import UOP_LOGO from "../images/UOP_LOGO.png";

function AppBar() {
    return(
        <>
        <div className="AppBar"> 
            
                <div class="row">
                    <div class="col logo">
                    <img className="responsive-logo" src={UOP_LOGO} alt="Logo Not Found." style={{ height: '50%', width: '50%' }} />

                    </div>
                    <div class="col-10 title">
                        <h3>Engineering Education Unit (EEU), Faculty of Engineering, University of Peradeniya.</h3>
                        <h5 className="mobile-hide">Paving the Path for Excellence in Engineering Education.</h5>
                    </div>
                </div>
            
        </div>
        
        </>
    );
}

export default AppBar;