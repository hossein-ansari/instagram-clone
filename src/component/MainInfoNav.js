import React, { useContext } from "react";
import { contextBox } from "../context/context";
export default function MainInfoNav() {
  const data = useContext(contextBox);
  return (
    <div className="main-info-nav">
      <div className="main-weather-info">
        <p className="city-name">
          {data.cityInfo !== undefined ? data.cityInfo.name : ""}
        </p>
        <p className="city-situation">{data.forecastInfo !== undefined ? data.forecastInfo[0].weather[0].main : ""}</p>
        <p className="city-temp">{data.forecastInfo !== undefined ? Math.floor(data.forecastInfo[1].main.temp - 273.15) : ""}°</p>
      </div>
      <div className="weather-img">
        <img alt="image"></img>
      </div>
    </div>
  );
}
