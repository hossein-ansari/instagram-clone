import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext();
const AllDatasProvider = ({ children }) => {
  const [cityInfo, setCityInfo] = useState();
  const [forecastInfo, setForecastInfo] = useState();
  console.log(cityInfo, forecastInfo);
  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&appid=0e89a6da403bb8b4ec40a7f0fedb1482",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCityInfo(data.city);
        setForecastInfo(data.list);
      });
    fetch("https://openweathermap.org/img/wn/10d@2x.png", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <contextBox.Provider value={{ cityInfo, forecastInfo }}>
      {children}
    </contextBox.Provider>
  );
};
export { AllDatasProvider, contextBox };
