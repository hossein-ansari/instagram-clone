import React, { useContext } from "react";
import { contextBox } from "../context/context";
export default function SearchNav() {
  const data = useContext(contextBox);
  function findCities(e) {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        data.setCityName(e.target.value);
        e.target.value = "";
      }
    }
  }
  return (
    <div className="search-nav">
      <input
        className="search-bar"
        onKeyDown={(e) => findCities(e)}
        placeholder="search"
        type="search"
      ></input>
    </div>
  );
}
