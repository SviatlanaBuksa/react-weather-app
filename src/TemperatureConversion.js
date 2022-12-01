import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  return (
    <div className="TemperatureConversion">
      <span className="current-temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
