import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  const days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  const months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];

  return (
    <div className="FormattedDate">
      {day}, {date} {month}
      <br />
      <span className="time">
        {hours}:{minutes}
      </span>
    </div>
  );
}
