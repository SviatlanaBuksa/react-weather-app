import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="dayOfWeek">Thu</div>
          <div className="icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              width="20"
              alt="/"
            />
          </div>
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
