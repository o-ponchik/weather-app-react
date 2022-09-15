import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    day: "Sunday",
    date: "8 May",
    time: "10:00",
    temperature: 18,
    humidity: 41,
    wind: 5,
    description: "Sunny",
  };
  return (
    <div className="p-3">
      <div className="SearchForm">
        <form className="row g-3 d-flex justify-content-center">
          <div className="col-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-success">
              Current
            </button>
          </div>
        </form>
      </div>
      <div className="CityDateTime search-city">
        <h1 className="current-city">{weatherData.city}</h1>
        <h2>
          {weatherData.day}, {weatherData.date}
        </h2>
        <p>
          <time>
            {weatherData.time}
            {/* <span>9</span>:<span>15</span> */}
          </time>
        </p>
      </div>
      <div className="row current-weather">
        <div className="col-5 temperature">
          <h2>
            <span className="degrees">{weatherData.temperature}</span>
            <span className="celsium"> °C</span>
            <span style={{ fontSize: 30 + "px" }}>|</span>
            <span className="fahrenheit">°F</span>
          </h2>
          <p className="description">{weatherData.description}</p>
        </div>

        <div className="col-2">
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="icon weather"
          />
          {/* <i className="icofont-sun-alt main"></i> */}
        </div>

        <div className="col-5 hummidy">
          <p className="humid">
            <i className="icofont-water-drop"></i>
            <span className="humidity-level">{weatherData.humidity}</span> %
          </p>
          <p className="wind">
            <i className="icofont-wind"></i>{" "}
            <span className="wind-speed">{weatherData.wind}</span> km/h
          </p>
        </div>
      </div>

      {/* Forecat */}
      <div className="row g-2 five-days">
        <div className="col icons shadow-sm p-2 rounded">
          <h3>Mon</h3>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="icon weather"
            className="imgForecast"
          />
          {/* <i className="icofont-sun-alt"></i> */}
          <p>
            19°C<span> 8°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Tue</h3>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="icon weather"
            className="imgForecast"
          />
          {/* <i className="icofont-clouds"></i> */}
          <p>
            16°C<span> 7°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Wed</h3>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="icon weather"
            className="imgForecast"
          />
          {/* <i className="icofont-sun-alt"></i> */}
          <p>
            22°C<span> 11°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Thu</h3>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="icon weather"
            className="imgForecast"
          />
          {/* <i className="icofont-full-sunny"></i> */}
          <p>
            18°C<span> 8°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Fri</h3>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="icon weather"
            className="imgForecast"
          />
          {/* <i className="icofont-rainy-thunder"></i> */}
          <p>
            13°C<span> 4°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
