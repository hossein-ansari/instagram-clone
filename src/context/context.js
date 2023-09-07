import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext();
const AllDatasProvider = ({ children }) => {
  const [cityName, setCityName] = useState("tehran");
  const [cityInfo, setCityInfo] = useState();
  const [forecastInfo, setForecastInfo] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0e89a6da403bb8b4ec40a7f0fedb1482`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== '404') {
          setCityInfo(data.city);
          setForecastInfo(data.list);
        }
      });
  }, [cityName]);
  return (
    <contextBox.Provider
      value={{ cityInfo, forecastInfo, cityName, setCityName }}
    >
      {children}
    </contextBox.Provider>
  );
};
export { AllDatasProvider, contextBox };
