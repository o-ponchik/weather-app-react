import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: `Sunday, 8 May`,
      time: `9:10`,
    });
  }

  // let weatherData = {
  //   city: "Toronto",
  //   day: "Sunday",
  //   date: "8 May",
  //   time: "10:00",
  //   temperature: 18,
  //   humidity: 41,
  //   wind: 5,
  //   description: "Sunny",
  // };
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container shadow">
          <div className="p-3">
            <div className="SearchForm">
              <form className="row g-3 d-flex justify-content-center">
                <div className="col-auto">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Enter a city"
                    autoFocus="on"
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
              <h2>{weatherData.date}</h2>
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
                  <span className="degrees">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="celsium"> °C</span>
                  <span style={{ fontSize: 30 + "px" }}>|</span>
                  <span className="fahrenheit">°F</span>
                </h2>
                <p className="description text-capitalize">
                  {weatherData.description}
                </p>
              </div>

              <div className="col-2">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
                {/* <i className="icofont-sun-alt main"></i> */}
              </div>

              <div className="col-5 indicators">
                <p className="humid">
                  Humidity: {""}
                  <span className="humidity-level">
                    {weatherData.humidity}
                  </span>{" "}
                  %
                </p>
                <p className="wind">
                  Wind: {""}
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
    const apiKey = `8fe82db9f96fcaef6fefb61a912cecd3`;
    let city = `London`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
