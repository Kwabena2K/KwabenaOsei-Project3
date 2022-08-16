import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
function Weather({ newTemp }) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const key = `5783354b44651863d0bd15ae06c6a392`;

  //   const searchLocation = (event) => {
  //     if (event.key === "Enter") {
  //       axios
  //         .get(
  //           `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric&lang=en`
  //         )
  //         .then((response) => {
  //           setData(response.data);
  //           console.log(response.data);
  //         });
  //       setLocation("");
  //     }
  //   };

  //   return (
  //     // Connecting the weatherData call from the API to the input form and also Displaying data from getWeather
  //     // <div className="location">
  //     //   <div className="locationUpdate">
  //     //   </div>
  //     // </div>
  //   );
}

export default Weather;
