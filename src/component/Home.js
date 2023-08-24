import React from "react";
import "../style/Home.css";
import wonImage from "../images/wonImage.jpg";
import Pagination from "react-bootstrap/Pagination";
import Modal from 'react-bootstrap/Modal'
import { AiOutlineHeart } from "react-icons/ai";
export default function Home() {
  return (
    <div className="Home">
      <div className="stories">
        <Pagination>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
        </Pagination>
      </div>
      <div className="posts">
      <Modal.Dialog>
        <Modal.Header>
          
          <Modal.Title><img src={wonImage}></img></Modal.Title>
          <p>name</p>
        </Modal.Header>

        <Modal.Body>
        <img src={wonImage}></img>
        </Modal.Body>

        <Modal.Footer>
        <AiOutlineHeart></AiOutlineHeart>
        </Modal.Footer>
      </Modal.Dialog>

      </div>
    </div>
  );
}
