import React, { useContext } from "react";
import { CiTempHigh } from "react-icons/ci";
import { BiWind } from "react-icons/bi";
import { contextBox } from "../context/context";
import ConvertTemperature from "../custom Hooks/ConvertTemperature";
export default function AirConditionsNav() {
  const data = useContext(contextBox);

  return (
    <div className="air-conditions-nav">
      <div className="air-infos-nav">
        <div className="air-infos">
          <div className="air-infos-temp-nav">
            {" "}
            <CiTempHigh className="air-infos-characteristic"></CiTempHigh>
            <p className="air-infos-temp">real feel</p>
          </div>
          <p className="infos-info">
            {data.cityInfo !== undefined
              ? ConvertTemperature(data.forecastInfo[1].main.feels_like)
              : ""}
            °
          </p>
        </div>
        <div className="air-infos">
          <div className="air-infos-temp-nav">
            {" "}
            <BiWind className="air-infos-characteristic"></BiWind>
            <p className="air-infos-temp">wind</p>
          </div>
          <p className="infos-info">
            {data.forecastInfo !== undefined
              ? Math.floor(data.forecastInfo[1].wind.speed * 3.6)
              : ""}{" "}
            km/h
          </p>
        </div>
      </div>
    </div>
  );
}
