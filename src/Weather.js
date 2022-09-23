import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = `8fe82db9f96fcaef6fefb61a912cecd3`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // search for city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container shadow">
          <div className="p-3">
            <div className="SearchForm">
              <form
                className="row g-3 d-flex justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="col-auto">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Enter a city"
                    autoFocus="on"
                    onChange={handleCityChange}
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
            <WeatherInfo info={weatherData} />

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
        </div>
        <p className="openSourceLink">
          <a href="https://github.com/o-ponchik" alt="GitHub">
            Open-source code
          </a>
          , built by {""}
          <a
            href="https://lighthearted-pony-a59add.netlify.app/"
            alt="Portfolio"
          >
            Mariia Matviian
          </a>
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
