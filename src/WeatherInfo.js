import React from "react";
import FormattedDate from "./FormattedDate";

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
          <h2>
            <span className="degrees">
              {Math.round(props.info.temperature)}
            </span>
            <span className="celsium"> °C</span>
            <span style={{ fontSize: 30 + "px" }}>|</span>
            <span className="fahrenheit">°F</span>
          </h2>
          <p className="description text-capitalize">
            {props.info.description}
          </p>
        </div>

        <div className="col-2">
          <img src={props.info.iconUrl} alt={props.info.description} />
          {/* <i className="icofont-sun-alt main"></i> */}
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
