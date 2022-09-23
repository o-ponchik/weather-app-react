import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="degrees">{Math.round(props.celsius)}</span>
          <span className="celsium"> °C</span>
          <span style={{ fontSize: 30 + "px" }}>|</span>
          <span className="fahrenheit">
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="degrees">{Math.round(fahrenheit())}</span>
          <span className="celsium">
            {" "}
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>
          <span style={{ fontSize: 30 + "px" }}>|</span>
          <span className="fahrenheit">°F</span>
        </h2>
      </div>
    );
  }
}
