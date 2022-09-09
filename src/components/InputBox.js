import axios from "axios";
import React from "react";
import { useState } from "react";
function InputBox() {
  const [location, setLocation] = useState("");
  const [city, updateCity] = useState("");
  const [country, updateCountry] = useState("");
  const [temperature, updateTemperature] = useState(null);
  const [humidity, updateHumidity] = useState(null);
  const [sunrise, updateSunrise] = useState(null);
  const [sunset, updateSunset] = useState(null);
  const [feelsLike, updateFeelsLike] = useState(null);
  const [description, updateDescription] = useState(null);

  const key = `5783354b44651863d0bd15ae06c6a392`;

  // Logic to find and display data from input box
  const findLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric&lang=en`
        )
        .then((weatherData) => {
          updateTemperature(weatherData.data.main.temp);
          updateSunset(weatherData.data.sys.sunset);
          updateSunrise(weatherData.data.sys.sunrise);
          updateHumidity(weatherData.data.main.humidity);
          updateCity(weatherData.data.name);
          updateCountry(weatherData.data.sys.country);
          updateFeelsLike(weatherData.data.main.feels_like);
          updateDescription(weatherData.data.weather[0].description);
        })
        .catch((error) => alert(error.message));

      setLocation("");
    }
  };
  return (
    // returning values based on userInput
    <div className="location">
      <div className="searchBox">
        <input
          className="input"
          placeholder="Enter a location"
          onChange={(event) => setLocation(event.target.value)}
          value={location}
          onKeyPress={findLocation}
        />
      </div>

      <div className="content">
        <div className="header">
          <h2>
            {city} {country}
          </h2>
          <p>{Math.round(temperature)}°C</p>

          <h3>{description}</h3>
        </div>
        <div className="content-child">
          <p>Feels Like: {Math.round(feelsLike)}%</p>
        </div>
        <div className="content-child">
          <p>Humidity: {Math.round(humidity)}%</p>
        </div>
        <div className="content-child">
          <p>
            Sunrise:{" "}
            {new Date(sunrise * 1000).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="content-child">
          <p>
            {" "}
            Sunset:{" "}
            {new Date(sunset * 1000).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
