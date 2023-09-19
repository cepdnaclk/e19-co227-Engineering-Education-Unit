import React from "react";
import './Titlebar.css';

function TitleBar() {
    return(
        <>
        <div className="TitleBar">
            <div class="row justify-content-between">
                <div className="Home-button-box col-auto">
                    <button className="Home-button">Home</button>
                </div>
                
                <div className="Login-button-box col-auto">
                    <button className="Login-button">Log In</button>
                </div>
            </div>    
        </div>
        </>
    );
}

export default TitleBar;