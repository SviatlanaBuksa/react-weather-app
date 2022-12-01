import React from "react";

export default function TemperatureConversion(props) {
  return (
    <div className="TemperatureConversion">
      <span className="current-temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
