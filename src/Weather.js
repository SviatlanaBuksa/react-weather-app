import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    temperature: 15,
    humidity: 99,
    wind: 1,
    date: "Saturday 5, 00:00",
    iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    description: "sunny",
  };
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
            <h1>{weatherData.city}</h1>
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
                Last update: <span>{weatherData.date}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 temperature-container d-flex justify-content-end col-sm-12 justify-content-center">
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <span className="current-temperature">{weatherData.temperature}</span>
          <span className="units">°C |</span>
          <span className="units">°F</span>
        </div>
      </div>
      <hr />
      <small>
        This project was coded by Sviatlana Buksa and is{" "}
        <a
          href="https://github.com/SviatlanaBuksa/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>
        and{" "}
        <a
          href="https://kaleidoscopic-gaufre-5a8b1e.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}
