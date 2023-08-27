import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext();
const AllDatasProvider = ({ children }) => {
  const [storiesImg, setStoriesIMg] = useState();
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=office&client_id=cMPwP5FZjsJChp5jVLcHCg2TT5jjzws017cudCbpRlQ"
    )
      .then((response) => response.json())
      .then((data) => setStoriesIMg(data.results));
  },[]);
  console.log(storiesImg);
  return (
    <contextBox.Provider value={{ storiesImg, setStoriesIMg }}>
      {children}
    </contextBox.Provider>
  );
};
export { AllDatasProvider, contextBox };
