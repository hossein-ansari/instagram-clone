import React from "react";
import Modal from "react-bootstrap/Modal";
import "../style/profile.css";
import wonImage from "../images/wonImage.jpg";
export default function Profile() {
  return (
    <div className="profile">
      <Modal.Dialog className="info-nav">
        <Modal.Header>
          <Modal.Title>
            <img className="profile-img" src={wonImage}></img>
          </Modal.Title>

          <Modal.Title className="name-profile">
            <h3 className="profile-name">name</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="BIO">Modal body text adsf asdf af asdf af asdf asdf asdfafasfasdfasd eragasfdasdfasdf asdfasdf asdgoes here.</p>
        </Modal.Body>
      </Modal.Dialog>
      <div className="self-posts">
        <div>
          <img className="profile-img" src={wonImage}></img>
        </div>
        <div>
          <img className="profile-img" src={wonImage}></img>
        </div>{" "}
        <div>
          <img className="profile-img" src={wonImage}></img>
        </div>{" "}
        <div>
          <img className="profile-img" src={wonImage}></img>
        </div>{" "}
        <div>
          <img className="profile-img" src={wonImage}></img>
        </div>{" "}
        <div>
          <img className="profile-img" src={wonImage}></img>
        </div>
      </div>
    </div>
  );
}
