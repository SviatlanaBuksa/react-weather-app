import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ loaded: false });

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row mb-4">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="w-100 search-input"
                autoComplete="off"
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
        <div className="row mt-4">
          <div className="col-md-6 col-sm-12">
            <div className="description">
              <h1>{props.defaultCity}</h1>
              <ul>
                <li>
                  Humidity:{" "}
                  <span className="values">
                    <span>{weatherData.humidity}</span>%
                  </span>
                  , Wind:{" "}
                  <span className="values">
                    <span>{weatherData.wind}</span> km/h
                  </span>
                </li>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 temperature-container d-flex justify-content-end col-sm-12 justify-content-center">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="current-temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°C |</span>
            <span className="units">°F</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c23e4eb6f4a6t8166c0e43o4fab44e39";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);

    function getWeather(response) {
      console.log(response);
      setWeatherdata({
        loaded: true,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.time * 1000),
        iconUrl: response.data.condition.icon_url,
      });
    }

    return (
      <div className="sweet-loading d-flex justify-content-center">
        <BarLoader color="#885df1" />
      </div>
    );
  }
}
