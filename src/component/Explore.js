import React, { useContext } from "react";
import "../style/explore.css";
import { contextBox } from "../context/context";
import { NavLink } from "react-router-dom";
export default function Explore() {
  const data = useContext(contextBox);
  console.log(data.exploreImg);
  return (
    <div className="explore">
      {data.exploreImg
        ? data.exploreImg.map((img, index) => (
            <NavLink to={`/post/${index}`} className="explore-post">
              <img className="explore-img" alt="" src={img.urls.regular}></img>
            </NavLink>
          ))
        : ""}
    </div>
  );
}
