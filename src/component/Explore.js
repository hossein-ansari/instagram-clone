import React from "react";
import "../style/explore.css";
import wonImage from "../images/wonImage.jpg";

export default function Explore() {
  return (
    <div className="explore">
      <div className="explore-post">
        <img className="explore-img" alt="" src={wonImage}></img>
      </div>
      <div className="explore-post">
        <img className="explore-img" alt="" src={wonImage}></img>
      </div>
      <div className="explore-post">
        <img className="explore-img" alt="" src={wonImage}></img>
      </div>
      <div className="explore-post">
        <img className="explore-img" alt="" src={wonImage}></img>
      </div>
    </div>
  );
}
