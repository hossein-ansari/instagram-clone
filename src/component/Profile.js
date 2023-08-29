import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../style/profile.css";
import wonImage from "../images/wonImage.jpg";
import { contextBox } from "../context/context";

export default function Profile() {
  const data = useContext(contextBox);
  const [canEdit, setCanEdit] = useState(true);
  let userAccountDatas = JSON.parse(data.storage.getItem("user"));
  const [bionmd, setBionmd] = useState(userAccountDatas.bio);

  function changeBio(e) {
    setBionmd(e.target.value);
    let userAccountDatasCopy = { ...userAccountDatas };
    userAccountDatasCopy.bio = e.target.value;
    data.storage.setItem("user", JSON.stringify(userAccountDatasCopy));
    console.log(userAccountDatasCopy);
  }
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
            <input
              value={bionmd}
              disabled={canEdit}
              className="bio-input"
              onChange={(e) => changeBio(e)}
              type="text"
            ></input>
            <button
              onClick={() => {
                setCanEdit((prev) => !prev);
              }}
              className="edit-bio"
            >
              edit
            </button>
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
