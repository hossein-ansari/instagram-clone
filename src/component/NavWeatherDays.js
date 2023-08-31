import React from 'react'

export default function NavWeatherDays() {
  return (
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
  )
}
