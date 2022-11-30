import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    setWeatherdata({
      loaded: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "c23e4eb6f4a6t8166c0e43o4fab44e39";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="w-100 search-input"
                autoComplete="off"
                onChange={handleChangeCity}
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <hr />
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();

    return (
      <div className="sweet-loading d-flex justify-content-center">
        <BarLoader color="#885df1" />
      </div>
    );
  }
}
