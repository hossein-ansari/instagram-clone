import React from "react";

export default function MainInfoNav() {
  return (
    <div className="main-info-nav">
      <div className="main-weather-info">
        <p className="city-name">Madrid</p>
        <p className="city-situation">rain</p>
        <p className="city-temp">33°</p>
      </div>
      <div className="weather-img">
        <img alt="image"></img>
      </div>
    </div>
  );
}
