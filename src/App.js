import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";
import InputBox from "./components/InputBox";
// import Forecast from "./components/Forecast";
import "./App.css";

const key = `5783354b44651863d0bd15ae06c6a392`;

function App() {
  const [latitude, updateLatitude] = useState({});
  const [longitude, updateLongitude] = useState({});
  const [city, updateCity] = useState("");
  const [country, updateCountry] = useState("");
  const [temperature, updateTemperature] = useState(null);
  const [humidity, updateHumidity] = useState(null);
  const [sunrise, updateSunrise] = useState(null);
  const [sunset, updateSunset] = useState(null);
  const [feelsLike, updateFeelsLike] = useState(null);
  const [description, updateDescription] = useState(null);

  // Console log to check if API call is not showing the correct longitude and latitude
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  // console.log(url);

  // Function to retrieve current location using geolocation
  // Functions below to retrieve data from API and update the HTML
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      updateLatitude(position.coords.latitude);
      updateLongitude(position.coords.longitude);
    });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
      )
      .then((weatherData) => {
        console.log(weatherData);
        updateTemperature(weatherData.data.main.temp);
        updateSunset(weatherData.data.sys.sunset);
        updateSunrise(weatherData.data.sys.sunrise);
        updateHumidity(weatherData.data.main.humidity);
        updateCity(weatherData.data.name);
        updateCountry(weatherData.data.sys.country);
        updateFeelsLike(weatherData.data.main.feels_like);
        updateDescription(weatherData.data.weather[0].description);

        //Local time is a little off
        // console.log(
        //   new Date(
        //     weatherData.data.dt * 1000 - weatherData.data.timezone * 1000
        //   )
        // );
        // // minus
        // console.log(
        //   new Date(
        //     weatherData.data.dt * 1000 + weatherData.data.timezone * 1000
        //   )
        // ); // plus
      });
  }, [latitude, longitude]);

  return (
    <div className="main">
      <Header />
      <InputBox />
      <Card
        temperature={temperature}
        humidity={humidity}
        sunset={sunset}
        sunrise={sunrise}
        city={city}
        country={country}
        description={description}
        feelsLike={feelsLike}
      />
      {/* <Forecast /> */}
    </div>
  );
}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${key}&units=metric

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
