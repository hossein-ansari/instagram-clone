import React, { useContext, useState } from "react";
import "../style/Home.css";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import { AiOutlineHeart } from "react-icons/ai";
import { contextBox } from "../context/context";
import { NavLink } from "react-router-dom";
export default function Home() {
  const data = useContext(contextBox);
  function watchStories(e) {
    data.setCanShowStory(true);
    data.setStoryScreen(e.target.src);
  }

  return (
    <div className="Home">
      <div className="stories">
        <Pagination>
          {data.storiesImg
            ? data.storiesImg.map((img, index) => (
                <li className="stories-div page-item stories-div">
                  <NavLink to={`./story-screen/${index}`}>
                    <img src={img.user.profile_image.large}></img>
                  </NavLink>
                </li>
              ))
            : ""}
        </Pagination>
      </div>
      <div className="posts">
        {data.storiesImg
          ? data.storiesImg.map((img) => (
              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>
                    <img src={img.user.profile_image.medium}></img>
                  </Modal.Title>
                  <p>{img.user.instagram_username}</p>
                </Modal.Header>

                <Modal.Body>
                  <img src={img.urls.raw}></img>
                </Modal.Body>

                <Modal.Footer>
                  <AiOutlineHeart></AiOutlineHeart>
                </Modal.Footer>
              </Modal.Dialog>
            ))
          : ""}
      </div>
    </div>
  );
}
