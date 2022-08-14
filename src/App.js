import React, { useState } from "react";
import "./App.css";

function App() {
  //Api key
  const key = "5783354b44651863d0bd15ae06c6a392";
  const [weatherData, setWeather] = useState([{}]);
  const [cityData, setCity] = useState("");

  // Creating the call to the API to retrieve the data
  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${key}&units=metric&lang=en`
      )
        .then((results) => results.json())
        .then((jsonData) => {
          setWeather(jsonData);
          setCity("");
        });
    }
  };

  // // Retrieving the date

  // const getDate = (d) => {
  //   let months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   let days = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];

  //     let day = days[d.getDay()];
  //     let date = d.getDate();
  //     let month = months[d.getMonth()];
  //     let year = d.getFullYear();

  //     return `${day} ${date} ${month} ${year}`;
  // };

  console.log(weatherData);

  // Connecting the weatherData call from the API to the input form and also Displaying data from getWeather
  return (
    <main>
      <div
        className={
          typeof weatherData.main != "undefined"
            ? weatherData.main.temp > 15
              ? "app hot"
              : "app cold"
            : "app default"
        }
      >
        <div className="wrapper">
          <input
            className="input"
            placeholder="Weather in your city"
            onChange={(event) => setCity(event.target.value)}
            value={cityData}
            onKeyPress={getWeather}
          />

          {typeof weatherData.main === "undefined" ? (
            <div className="query">Search for a city</div>
          ) : (
            <div className="city">
              <p>
                {weatherData.name}, {weatherData.sys.country}
              </p>

              <div className="weatherIcon">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </div>

              <div className="weatherData">
                <div className="temp">
                  <p className="bold">{Math.round(weatherData.main.temp)}°C</p>
                  <p className="text">Temperature</p>
                </div>
                <div className="humidity">
                  <p className="bold">{weatherData.main.humidity}%</p>
                  <p className="text">Humidity</p>
                </div>
                <div className="feelsLike">
                  <p className="bold">
                    {Math.round(weatherData.main.feels_like)}°C
                  </p>
                  <p className="text">Feels like</p>
                </div>
              </div>
            </div>
          )}

          {weatherData.cod === "404" ? (
            <p className="error">Please enter a valid city</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;

// PSUEDOCODE
// Create state items to hold data coming from the third-party API and the user input
// - weather
// - userInput from search bar

// Once the component has been loaded call the local method (getWeather) to get weather data

// A local method (getWeather) to make the third-party API call with or without user input
// - when successful, update the state (weather) with new data
// - if unsuccessful, display the error message

// A local method (handleChange) to handle the onChange event to update state (userInput) with user input

// Render the application
// - header
// - A search bar to allow the user to find a specific location
// - use the imported Result component
// - footer

//  Result Part
// Create a component to display data from the third-party API
// This component will get data (weather) passed in as props
// Based on userInput the call to the API will display the location and weather information
