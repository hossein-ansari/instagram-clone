import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext();
const AllDatasProvider = ({ children }) => {
  // datas 
  const [storiesImg, setStoriesIMg] = useState();
  const [exploreImg, setExploreIMg] = useState();

  const [canShowStory, setCanShowStory] = useState(false);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=office&client_id=cMPwP5FZjsJChp5jVLcHCg2TT5jjzws017cudCbpRlQ"
    )
      .then((response) => response.json())
      .then((data) => setStoriesIMg(shuffleArray(data.results)));
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=office&client_id=cMPwP5FZjsJChp5jVLcHCg2TT5jjzws017cudCbpRlQ&per_page=50"
    )
      .then((response) => response.json())
      .then((data) => setExploreIMg(shuffleArray(data.results)));
  }, []);
  console.log(storiesImg);
  return (
    <contextBox.Provider
      value={{
        storiesImg,
        canShowStory,
        exploreImg,
        setStoriesIMg,
        setCanShowStory,
        setExploreIMg,
      }}
    >
      {children}
    </contextBox.Provider>
  );
};
export { AllDatasProvider, contextBox };
