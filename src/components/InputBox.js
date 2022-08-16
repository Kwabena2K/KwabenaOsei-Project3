import axios from "axios";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCloud,
//   faCloudRain,
//   faSmog,
// } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function InputBox() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [newTemp, updateNewTemp] = useState(null);
  const [newHumidity, updateNewHumidity] = useState(null);
  const [newSunset, updateNewSunset] = useState(null);
  const [newSunrise, updateNewSunrise] = useState(null);
  const [newCountry, updateNewCountry] = useState(null);
  const [description, updateDescription] = useState(null);
  const [icon, updateIcon] = useState(null);

  const key = `5783354b44651863d0bd15ae06c6a392`;

  const findLocation = (event) => {
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
          updateDescription(response.data.weather[0].description);
          updateIcon(response.data.weather[0].icon);
          console.log(response.data);

          // Weather icon changing on userInput
          //       if (icon === "Clouds") {
          //         icon = (
          //           <img
          //             src={`http://openweathermap.org/img/w/${icon}.png`}
          //             alt="weather image"
          //           />
          //         );
          //       }
        });
      setLocation("");
    }

    // Changing the logo based on description of input from user
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
          onKeyPress={findLocation}
        />
      </div>

      <div className="content">
        <div className="header">
          <h2>
            {data.name} ({newCountry})
          </h2>
          <p>{Math.round(newTemp)}°C</p>
          <h3>{description}</h3>
        </div>
        <div className="content-child">
          <p>Humidity: {Math.round(newHumidity)}%</p>
        </div>
        <div className="content-child">
          <p>
            Sunrise:{" "}
            {new Date(newSunrise * 1000).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="content-child">
          <p>
            {" "}
            Sunset:{" "}
            {new Date(newSunset * 1000).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
      <div className="icons">{icon}</div>
    </div>
  );
}

export default InputBox;
