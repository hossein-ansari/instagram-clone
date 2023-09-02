import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext();
const AllDatasProvider = ({ children }) => {
  useEffect(() => {
    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '48d15888fbmsh245d3f7b35e52f9p12d515jsndd317c5231ff',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    })
      .then((response) => {
        response.text();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <contextBox.Provider value={{}}>{children}</contextBox.Provider>;
};
export { AllDatasProvider, contextBox };
