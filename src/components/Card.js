import React from "react";

function Card({
  temperature,
  sunrise,
  humidity,
  city,
  sunset,
  country,
  feelsLike,
}) {
  // bottom card section displaying user's personal weather information
  return (
    <div className="card">
      <div className="heading">
        <h2>Your weather information:</h2>
        <h4>
          {city}, {country}
        </h4>
      </div>
      <div className="cardContent">
        <div className="card-child">
          <p>Temperature:</p> {Math.round(temperature)}°C
        </div>
        <div className="card-child">
          <p>Feels Like:</p> {Math.round(feelsLike)}°C
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
    </div>
  );
}

export default Card;
