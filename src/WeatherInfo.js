import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CityDateTime search-city">
        <h1 className="current-city">{props.info.city}</h1>
        <h2>
          <FormattedDate date={props.info.date} />
        </h2>
      </div>
      <div className="row current-weather">
        <div className="col-5 temperature">
          <WeatherTemperature celsius={props.info.temperature} />

          <p className="description text-capitalize">
            {props.info.description}
          </p>
        </div>

        <div className="col-2">
          <WeatherIcon code={props.info.icon} size={60} />
        </div>

        <div className="col-5 indicators">
          <p className="humid">
            Humidity: {""}
            <span className="humidity-level">{props.info.humidity}</span> %
          </p>
          <p className="wind">
            Wind: {""}
            <span className="wind-speed">{props.info.wind}</span> km/h
          </p>
        </div>
      </div>
    </div>
  );
}
