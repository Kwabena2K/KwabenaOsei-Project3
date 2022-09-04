import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import InputBox from "./components/InputBox";
import axios from "axios";
import "./App.css";

const key = `5783354b44651863d0bd15ae06c6a392`;

function App() {
  const [latitude, updateLatitude] = useState("43.6532");
  const [longitude, updateLongitude] = useState("-79.3337021");
  const [city, updateCity] = useState("");
  const [country, updateCountry] = useState("");
  const [temperature, updateTemperature] = useState(null);
  const [humidity, updateHumidity] = useState(null);
  const [sunrise, updateSunrise] = useState(null);
  const [sunset, updateSunset] = useState(null);
  const [feelsLike, updateFeelsLike] = useState(null);
  const [description, updateDescription] = useState(null);

  // logic to retrieve current location using geolocation

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      updateLatitude(position.coords.latitude);
      updateLongitude(position.coords.longitude);
    });
  }, []);

  //logic to fetch data from api and retrieve relevant information

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
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
      });
  }, [latitude, longitude]);

  return (
    <div className="app">
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
      </div>
      <footer className="footerBottom">
        <p>
          Designed by <a href="https://kwabenaosei.com/">Kwabena</a> at Juno
          College
        </p>
      </footer>
    </div>
  );
}

export default App;
