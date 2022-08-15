import React from "react";

function Card({ temperature }) {
  return (
    <div className="card">
      <h1>City</h1>
      <h4>Date</h4>
      <div className="card-child">
        <p>Temperature:</p> {temperature}℃
      </div>
      <div className="card-child">
        <p>Humidity</p> 11 %
      </div>
      <div className="card-child">
        <p>Sunrise</p> 44℃
      </div>
      <div className="card-child">
        <p>Sunset</p> 22 %
      </div>
    </div>
  );
}

export default Card;
