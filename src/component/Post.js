import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextBox } from "../context/context";
import "../style/Post.css";
import { RxCross2 } from "react-icons/rx";
export default function Post() {
  const navigate = useNavigate();
  const data = useContext(contextBox);
  const { id } = useParams();
  return (
    <div className="post">
      <div className="container">
        <div className="user-nav">
          <img
            className="user-img"
            src={data.exploreImg[id].user.profile_image.medium}
            alt=""
          ></img>
          <p className="user-name">
            {data.exploreImg[id].user.instagram_username}
          </p>
          <RxCross2
            className="cross-explore-icon"
            onClick={() => {
              navigate("/explore");
            }}
          ></RxCross2>
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
