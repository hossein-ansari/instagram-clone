import React from "react";
import "../style/navWeatherinfo.css";

import TodayForecastNav from "./TodayForecastNav";
import MainInfoNav from "./MainInfoNav";
import SearchNav from "./SearchNav";
import AirConditionsNav from "./AirConditionsNav";

export default function NavWeatherInfo() {
  return (
    <div className="nav-weather-info">
      <SearchNav></SearchNav>
      <MainInfoNav></MainInfoNav>
      <TodayForecastNav></TodayForecastNav>
      <AirConditionsNav></AirConditionsNav>
    </div>
  );
}
