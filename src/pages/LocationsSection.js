import React from "react";

//Image Imports
import cafe1 from "../img/cafe1.jpg";
import cafe2 from "../img/cafe2.jpg";
import cafe3 from "../img/cafe3.jpg";
import cafe4 from "../img/cafe4.jpg";

//CSS
import "./LocationSection.css";

function LocationsSection() {
  return (
    <div className="location-container">
      <div className="row-location">
        <div className="column-location">
          <img src={cafe1} alt="cafe"></img>
          <span>Tokyo</span>
        </div>
        <div className="column-location">
          <img src={cafe2} alt="cafe"></img>
          <span>Seoul</span>
        </div>
      </div>
      <div className="row-location">
        <div className="column-location">
          <img src={cafe3} alt="cafe"></img>
          <span>Los Angeles</span>
        </div>
        <div class="column-location">
          <img src={cafe4} alt="cafe"></img>
          <span>Paris</span>
        </div>
      </div>
    </div>
  );
}

export default LocationsSection;
