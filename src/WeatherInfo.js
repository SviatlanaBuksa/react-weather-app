import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo ">
      <div className="row mt-4 mb-4">
        <div className="col-md-6 col-sm-12">
          <div className="description">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                Humidity:{" "}
                <span className="values">
                  <span>{props.data.humidity}</span>%
                </span>
                , Wind:{" "}
                <span className="values">
                  <span>{props.data.wind}</span> km/h
                </span>
              </li>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 temperature-container d-flex justify-content-end col-sm-12 justify-content-center">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <TemperatureConversion celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
