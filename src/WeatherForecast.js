import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row g-2 five-days">
        <div className="col icons shadow-sm p-2 rounded">
          <h3>Mon</h3>
          <WeatherIcon code="04d" size={30} />

          <p>
            19°C<span> 8°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Tue</h3>
          <WeatherIcon code="04d" size={30} />
          <p>
            16°C<span> 7°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Wed</h3>
          <WeatherIcon code="04d" size={30} />
          <p>
            22°C<span> 11°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Thu</h3>
          <WeatherIcon code="04d" size={30} />
          <p>
            18°C<span> 8°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Fri</h3>
          <WeatherIcon code="04d" size={30} />
          <p>
            13°C<span> 4°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Fri</h3>
          <WeatherIcon code="04d" size={30} />
          <p>
            13°C<span> 4°C</span>
          </p>
        </div>

        <div className="col icons shadow-sm p-2 rounded">
          <h3>Fri</h3>
          <WeatherIcon code="04d" size={30} />
          <p>
            13°C<span> 4°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
