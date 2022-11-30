import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let apiKey = "c23e4eb6f4a6t8166c0e43o4fab44e39";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(getForecast);

  function getForecast(response) {
    //console.log(response);
  }

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
