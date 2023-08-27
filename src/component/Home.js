import React, { useContext, useState } from "react";
import "../style/Home.css";
import wonImage from "../images/wonImage.jpg";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import { AiOutlineHeart } from "react-icons/ai";
import { contextBox } from "../context/context";
export default function Home() {
  const data = useContext(contextBox);
  return (
    <div className="Home">
      <div className="stories">
        <Pagination>
          {data.storiesImg
            ? data.storiesImg.map((img) => (
                <Pagination.Item className="stories-div">
                  <img src={img.urls.small_s3}></img>
                </Pagination.Item>
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
                    <img src={img.user.profile_image.large}></img>
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
