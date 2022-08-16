import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
function InputBox() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [newTemp, updateNewTemp] = useState(null);
  const [newHumidity, updateNewHumidity] = useState(null);
  const [newSunset, updateNewSunset] = useState(null);
  const [newSunrise, updateNewSunrise] = useState(null);
  const [newCountry, updateNewCountry] = useState(null);
  const key = `5783354b44651863d0bd15ae06c6a392`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric&lang=en`
        )
        .then((response) => {
          setData(response.data);
          updateNewTemp(response.data.main.temp);
          updateNewHumidity(response.data.main.humidity);
          updateNewSunset(response.data.sys.sunset);
          updateNewSunrise(response.data.sys.sunrise);
          updateNewCountry(response.data.sys.country);
          console.log(response.data);
        });
      setLocation("");
    }
  };

  return (
    // Connecting the weatherData call from the API to the input form and also Displaying data from getWeather
    <div className="location">
      <div className="searchBox">
        <input
          className="input"
          placeholder="Please enter a location"
          onChange={(event) => setLocation(event.target.value)}
          value={location}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="header">
        ({data.name},{newCountry})
      </div>
      <div className="card-child">
        Temperature: {""} {Math.round(newTemp)}°C
      </div>
      <div className="card-child">Humidity: {Math.round(newHumidity)}%</div>
      <div className="card-child">
        Sunrise:{" "}
        {new Date(newSunrise * 1000).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="card-child">
        Sunset:{" "}
        {new Date(newSunset * 1000).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
}

export default InputBox;
