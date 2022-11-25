import React from "react";

export default function FormattedDate(props) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuersday",
    "Friday",
    "Saturday",
  ];

  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (hour <= 9) {
    hour = `0${hour}`;
  }

  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      Last update: {daysOfWeek[props.date.getDay()]}, {hour}:{minutes}
    </div>
  );
}
