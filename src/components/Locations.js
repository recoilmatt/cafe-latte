import React from "react";
//CSS
import "./Locations.css";

//Image Imports
import cafe1 from "../img/cafe1.jpg";
import cafe2 from "../img/cafe2.jpg";
import cafe3 from "../img/cafe3.jpg";
import cafe4 from "../img/cafe4.jpg";

function Locations() {
  return (
    <div class="row-container">
      <div class="location">
        <img src={cafe1} alt="cafe"></img>
      </div>
      <div class="location">
        <img src={cafe2} alt="cafe"></img>
      </div>
      <div class="location">
        <img src={cafe3} alt="cafe"></img>
      </div>
      <div class="location">
        <img src={cafe4} alt="cafe"></img>
      </div>
    </div>
  );
}

export default Locations;
