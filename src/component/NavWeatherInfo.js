import React from "react";
import "../style/navWeatherinfo.css";
import { CiTempHigh, CiDroplet } from "react-icons/ci";
import { BiWind } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import TodayForecastNav from "./TodayForecastNav";
import MainInfoNav from "./MainInfoNav";
import SearchNav from "./SearchNav";

export default function NavWeatherInfo() {
  return (
    <div className="nav-weather-info">
      <SearchNav></SearchNav>
      <MainInfoNav></MainInfoNav>
      <TodayForecastNav></TodayForecastNav>
      <div className="air-conditions-nav">
        <div className="air-infos-nav">
          <div className="air-infos">
            <div className="air-infos-temp-nav">
              {" "}
              <CiTempHigh className="air-infos-characteristic"></CiTempHigh>
              <p className="air-infos-temp">real feel</p>
            </div>
            <p className="infos-info">33°</p>
          </div>
          <div className="air-infos">
          <div className="air-infos-temp-nav">
              {" "}
              <BiWind className="air-infos-characteristic"></BiWind>
              <p className="air-infos-temp">wind</p>
            </div>
            <p className="infos-info">33°</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
