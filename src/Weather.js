import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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
            <WeatherForecast coordinates={weatherData.coordinates} />

            {/* Forecat */}
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
