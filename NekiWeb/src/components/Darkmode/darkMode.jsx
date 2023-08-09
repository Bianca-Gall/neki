import React from "react";
import "./darkMode.css";
import { BsMoonStars, BsSun } from "react-icons/bs";

function DarkMode() {
    
  return (
    
      <div className="darkBox">
        <input type="checkbox" id="darkMode-toggle" className="inputDarkMode" />
        <label htmlFor="darkMode-toggle" className="labelDarkMode">
          <span className="moon">
            <BsMoonStars />
          </span>
          <span className="sun">
            <BsSun />
          </span>
        </label>
        <div className="background">   </div>
    </div>
  );
}

export default DarkMode;
