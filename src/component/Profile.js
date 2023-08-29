import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "../style/profile.css";
import wonImage from "../images/wonImage.jpg";
import { contextBox } from "../context/context";

export default function Profile() {
  const data = useContext(contextBox);
  let canEdit = false
  let userAccountDatas = JSON.parse(data.storage.getItem("user"));
  return (
    <div className="profile">
      <Modal.Dialog className="info-nav">
        <Modal.Header>
          <Modal.Title>
            <img className="profile-img" src={wonImage}></img>
          </Modal.Title>

          <Modal.Title className="name-profile">
            <h3 className="profile-name">{userAccountDatas.username}</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="BIO">
            {" "}
            <input className="bio-input" value={userAccountDatas.bio} type="text"></input>
           
            <button onClick={canEdit = !canEdit} className="edit-bio">edit</button>
          </div>
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
