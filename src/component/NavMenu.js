import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
import { BiMapAlt } from "react-icons/bi";
import { LiaCitySolid } from "react-icons/lia";
import { AiOutlineSetting } from "react-icons/ai";
export default function NavMenu() {
  return (
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
  )
}
