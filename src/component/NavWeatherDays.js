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
      <h2>days forecast</h2>
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
                    <img
                      className="days-forecast-situation"
                      src={`https://openweathermap.org/img/wn/${
                        data.forecastInfo
                          ? data.forecastInfo[1].weather[0].icon
                          : ""
                      }@2x.png`}
                      alt=""
                    ></img>
                    <p className="days-forecast-deduction">
                      {ConvertTemperature(days.main.temp)}°
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
