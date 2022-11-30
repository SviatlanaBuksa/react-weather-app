import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast({ newCity }) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function getForecast(response) {
    setForecastData(response.data.daily[0]);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [newCity]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecastData} />
        </div>
      </div>
    );
  } else {
    let apiKey = "c23e4eb6f4a6t8166c0e43o4fab44e39";
    let city = newCity;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(getForecast);

    return null;
  }
}
