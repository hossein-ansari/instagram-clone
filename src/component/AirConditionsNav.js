import React from "react";
import { CiTempHigh, CiDroplet } from "react-icons/ci";
import { BiWind } from "react-icons/bi";
export default function AirConditionsNav() {
  return (
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
  );
}
