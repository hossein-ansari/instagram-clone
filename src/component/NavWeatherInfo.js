import React from 'react'
import { CiTempHigh, CiDroplet} from "react-icons/ci";
import { BiWind } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
export default function NavWeatherInfo() {
  return (
    <div className="nav-weather-info">
    <input className="search-bar" type="search"></input>
    <div className="main-info-nav">
      <div className="main-weather-info"></div>
      <div className="weather-img">
        <img alt=""></img>
      </div>
    </div>
    <div className="today-forecast-nav">
      <h2 className="today-forecast-h2">todays forecast</h2>
      <div className="forecast-time-nav">
        <div className="forecast-time-info">
          <p className="forecast-time">06:00 AM</p>
          <img className="forecast-img" alt=""></img>
          <p className="forecast-temp">33'</p>
        </div>
      </div>
    </div>
    <div className="air-conditions-nav">
      <div className="air-infos-nav">
        <div className="air-infos">
          <p className="air-infos-characteristic">
            <CiTempHigh></CiTempHigh>
          </p>
          <p className="air-infos-temp"></p>
        </div>
        <div className="air-infos">
          <p className="air-infos-characteristic">
            <BiWind></BiWind>
          </p>
          <p className="air-infos-temp"></p>
        </div>
      </div>
      <div className="air-infos-nav">
        <div className="air-infos">
          <p className="air-infos-characteristic">
            <CiDroplet></CiDroplet>
          </p>
          <p className="air-infos-temp"></p>
        </div>
        <div className="air-infos">
          <p className="air-infos-characteristic">
            <BsSun></BsSun>
          </p>
          <p className="air-infos-temp"></p>
        </div>
      </div>
    </div>
  </div>
  )
}
