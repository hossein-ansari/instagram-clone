import React, { useContext } from "react";
import { NavLink, json } from "react-router-dom";
import "../style/loginUser.css";
import { useLocation } from "react-router-dom";
import { contextBox } from "../context/context";
export default function LoginUser() {
  const data = useContext(contextBox)
  const location = useLocation();
  const currentPath = location.pathname;
  let userAccountInfo = {
    username: "",
    password: "",
    bio: "",
    posts: [],
    profileIMg: "",
  };
  function setUserName(e) {
    userAccountInfo.username = e.target.value;
  }
  function setPassword(e) {
    userAccountInfo.password = e.target.value;
  }
  function register() {
    data.storage.setItem('user',JSON.stringify(userAccountInfo))

    }

  return (
    <div>
      <div className="login-nav">
        <h3>instagram</h3>
        {currentPath === "/login" ? (
          <form className="login-from">
            <input
              
              type="text"
              placeholder="user name"
            ></input>
            <input
              
              type="password"
              placeholder="password"
            ></input>
            <div className="login-btn">
              <NavLink to={"/"}>login</NavLink>
              <NavLink to={"/register"}>register</NavLink>
            </div>
          </form>
        ) : (
          <form className="register-from">
            <input required onChange={(e) => setUserName(e)} type="text" placeholder="user name"></input>
            <input required onChange={(e) => setPassword(e)}  type="password" placeholder="password"></input>
            <input 
              required
              type="password"
              placeholder="repeat password"
            ></input>

            <div className="register-btn">
              <NavLink onClick={register} to={"/"}>
                register
              </NavLink>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
