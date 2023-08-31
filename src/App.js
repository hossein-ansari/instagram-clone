import "./App.css";
import { Link, NavLink, Navigate } from "react-router-dom";
import Routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
import { BiMapAlt } from "react-icons/bi";
import { LiaCitySolid } from "react-icons/lia";
import { AiOutlineSetting } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="nav-menu">
        <div className="menu-btn">
          <TiWeatherCloudy></TiWeatherCloudy>
          <p>weather</p>
        </div>
        <div className="menu-btn">
          <LiaCitySolid></LiaCitySolid>
          <p>cities</p>
        </div>
        <div className="menu-btn">
          <BiMapAlt></BiMapAlt>
          <p>map</p>
        </div>
        <div className="menu-btn">
          <AiOutlineSetting></AiOutlineSetting>
          <p>setting</p>
        </div>
      </div>
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
                <i></i>
              </p>
              <p className="air-infos-temp"></p>
            </div>
            <div className="air-infos">
              <p className="air-infos-characteristic">
                <i></i>
              </p>
              <p className="air-infos-temp"></p>
            </div>
          </div>
          <div className="air-infos-nav">
            <div className="air-infos">
              <p className="air-infos-characteristic">
                <i></i>
              </p>
              <p className="air-infos-temp"></p>
            </div>
            <div className="air-infos">
              <p className="air-infos-characteristic">
                <i></i>
              </p>
              <p className="air-infos-temp"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-weather-days">
        <h2>7-day forecast</h2>
        <div className="days-forecast-nav">
          <div className="days-forecast-days">
            <p className="days-forecast-day">today</p>
            <p className="days-forecast-situation">
              <i></i>sunny
            </p>
            <p className="days-forecast-deduction">36/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
