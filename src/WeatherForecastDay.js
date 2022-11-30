import React from "react";

export default function WeatherForecastDay(props) {
  function roundTemperatureMax() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function roundTemperatureMin() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function convertDate() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    day = days[day];
    return day;
  }

  return (
    <div className="col">
      <div className="dayOfWeek">{convertDate()}</div>
      <div className="icon">
        <img src={props.data.condition.icon_url} width="20" alt="/" />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">
          {roundTemperatureMax()}
        </span>
        <span className="forecast-temperature-min">
          {roundTemperatureMin()}
        </span>
      </div>
    </div>
  );
}
