import React, { useState } from "react";
import "./App.css";

function App() {
  const key = "5783354b44651863d0bd15ae06c6a392";
  const [weatherData, setWeather] = useState([{}]);
  const [cityData, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${key}&units=metric&lang=en`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        });
    }
  };
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
