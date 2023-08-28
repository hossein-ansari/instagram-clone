import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { contextBox } from "../context/context";
import "../style/Post.css";
export default function Post() {
  const data = useContext(contextBox);
  const { id } = useParams();
  return (
    <div className="post">
      <div className="container">
        <div className="user-nav">
          <img
            className="user-img"
            src={data.exploreImg[id].user.profile_image.medium}
          ></img>
          <p className="user-name">
            {data.exploreImg[id].user.instagram_username}
          </p>
        </div>
        <img
          className="post-explore-img"
          src={data.exploreImg[id].urls.raw}
          alt=""
        ></img>
        <p className="post-dis">{data.exploreImg[id].alt_description}</p>
      </div>
    </div>
  );
}
