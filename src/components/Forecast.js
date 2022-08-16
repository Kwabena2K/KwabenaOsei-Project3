import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function Forecast() {
  const key = `5783354b44651863d0bd15ae06c6a392`;
  const [hourly, updateHourly] = useState(null);
  const [newLatitude, updateLatitude] = useState(null);
  const [newLongitude, updateLongitude] = useState(null);

  const getWeather = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `api.openweathermap.org/data/2.5/forecast?lat=${newLatitude}&lon=${newLongitude}&appid=${key}&units=metric`
        )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    }
  };

  return (
    <input
      className="inputTest"
      placeholder="Test"
      onKeyPress={getWeather}
      onChange={(event) => updateHourly(event.target.value)}
    />
  );
}

export default Forecast;
