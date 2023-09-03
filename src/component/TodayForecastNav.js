import React, { useContext } from "react";
import { contextBox } from "../context/context";
import ConvertTemperature from "../custom Hooks/ConvertTemperature";
export default function TodayForecastNav() {
  const data = useContext(contextBox);
  function splitInfo(time) {
    return time.split(" ")[1].slice(0, -3);
  }
  return (
    <div className="today-forecast-nav">
      <h2 className="today-forecast-h2">todays forecast</h2>
      <div className="forecast-time-nav">
        {data.forecastInfo !== undefined
          ? data.forecastInfo.map((days, index) => {
              if (index <= 4) {
                return (
                  <div className={`forecast-time-info ${index === 4 ? 'last' : ''}`}>
                    <p className="forecast-time">{splitInfo(days.dt_txt)}</p>
                    <img src={`https://openweathermap.org/img/wn/${days.weather[0].icon}@2x.png`} className="forecast-img" alt="image"></img>
                    <p className="forecast-temp">{ConvertTemperature(days.main.temp)}°</p>
                  </div>
                );
              }
            })
          : ""}
      </div>
    </div>
  );
}
