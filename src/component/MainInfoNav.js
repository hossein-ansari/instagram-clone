import React, { useContext } from "react";
import { contextBox } from "../context/context";
import ConvertTemperature from "../custom Hooks/ConvertTemperature";

export default function MainInfoNav() {
  const data = useContext(contextBox);
  return (
    <div className="main-info-nav">
      <div className="main-weather-info">
        <p className="city-name">
          {data.cityInfo !== undefined ? data.cityInfo.name : ""}
        </p>
        <p className="city-situation">
          {data.forecastInfo !== undefined
            ? data.forecastInfo[0].weather[0].main
            : ""}
        </p>
        <p className="city-temp">
          {data.forecastInfo !== undefined
            ? ConvertTemperature(data.forecastInfo[1].main.temp)
            : ""}
          °
        </p>
      </div>
      <div className="weather-img">
        <img
          src={`https://openweathermap.org/img/wn/${
            data.forecastInfo ? data.forecastInfo[1].weather[0].icon : ""
          }@2x.png`}
          alt=""
        ></img>
      </div>
    </div>
  );
}
