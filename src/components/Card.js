import React from "react";

function Card({
  temperature,
  sunrise,
  humidity,
  city,
  sunset,
  description,
  country,
}) {
  return (
    <div className="card">
      <div className="header">
        <h2>Your weather information:</h2>
        <h3>
          {city}, {country}
        </h3>
      </div>
      <div className="card-child">
        <p>Temperature:</p> {Math.round(temperature)}°C
      </div>
      <div className="card-child">
        <p>Humidity:</p> {humidity}%
      </div>
      <div className="card-child">
        <p>Sunrise:</p>{" "}
        {new Date(sunrise * 1000).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="card-child">
        <p>Sunset:</p>{" "}
        {new Date(sunset * 1000).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
}

export default Card;