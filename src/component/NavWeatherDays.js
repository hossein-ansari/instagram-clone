import React, { useContext } from "react";
import "../style/navWeatherDays.css";
import { contextBox } from "../context/context";
import ConvertTemperature from "../custom Hooks/ConvertTemperature";
export default function NavWeatherDays() {
  const data = useContext(contextBox);
  let countDays = 3;
  function splitInfo(time) {
    return time.split(" ")[0].slice(5);
  }
  return (
    <div className="nav-weather-days">
      <h2>7-day forecast</h2>
      <div className="days-forecast-nav">
        {data.forecastInfo !== undefined
          ? data.forecastInfo.map((days) => {
              countDays += 1;
              if (countDays % 8 === 0) {
                return (
                  <div className="days-forecast-days">
                    <p className="days-forecast-day">
                      {splitInfo(days.dt_txt)}
                    </p>
                    <p className="days-forecast-situation">
                      <i></i>
                      {days.weather[0].main}
                    </p>
                    <p className="days-forecast-deduction">
                      {ConvertTemperature(data.forecastInfo[1].main.temp)}°
                    </p>
                  </div>
                );
              }
            })
          : ""}
      </div>
    </div>
  );
}
