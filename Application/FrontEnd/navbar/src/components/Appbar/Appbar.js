import React from "react";
import "./Appbar.css";
import UOP_LOGO from "../../img/logo.png";

function AppBar() {
    return(
        <>
        <div className="AppBar"> 
            
                <div class="row">
                    <div class="col logo">
                    <img className="responsive-logo" src={UOP_LOGO} alt="Logo Not Found." style={{ height: '20%', width: '20%', alignItems: "center" }} />

                    </div>
                    <div class="col-10 title">
                        <h2>Engineering Education Unit, Faculty of Engineering, University of Peradeniya. {/*(EEU), Faculty of Engineering, University of Peradeniya.*/}</h2>
                        <h5 className="mobile-hide">Paving the Path for Excellence in Engineering Education.</h5>
                    </div>
                </div>
            
        </div>
        
        </>
    );
}

export default AppBar;