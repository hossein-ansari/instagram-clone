import React from "react";
import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";
export default function LoginUser() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  return (
    <div>
      <div className="login-nav">
        <h3>instagram</h3>
        {currentPath === "/login" ? (
          <form>
            <input type="text" placeholder="user name"></input>
            <input type="password" placeholder="password"></input>
            <div>
              <NavLink to={"/"}>login</NavLink>
              <NavLink to={"/register"}>register</NavLink>
            </div>
          </form>
        ) : (
          <form>
            <input type="text" placeholder="user name"></input>
            <input type="password" placeholder="password"></input>
            <input type="password" placeholder="repeat password"></input>

            <div>
              <NavLink to={"/"}>register</NavLink>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
