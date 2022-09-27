import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

    return days[day];
  }

  return (
    <div className="col icons shadow-sm p-2 rounded">
      <h3>{day()}</h3>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />

      <p>
        {Math.round(props.data.temp.max)}°C
        <span> {Math.round(props.data.temp.min)}°C</span>
      </p>
    </div>
  );
}
