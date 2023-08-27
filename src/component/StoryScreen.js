import React, { useContext, useState } from "react";
import "../style/storyScreen.css";
import { contextBox } from "../context/context";
import { RxCross2 } from "react-icons/rx";
import { Navigate, useNavigate } from "react-router";

export default function StoryScreen() {
  const data = useContext(contextBox);

  const [timerStory, setTimerStory] = useState(0);
  const navigate = useNavigate();
  setTimeout(() => {
      setTimerStory((prev) => prev + 1);
      if (timerStory >= 100) {
        navigate('/');
        setTimerStory(0);
        
      }
      console.log('a');
  }, 100);

  return (
    <div className="story-screen">
      <RxCross2 className="cross-icon" onClick={()=>{navigate('/')}}></RxCross2>
      <div style={{ width: `${timerStory}%` }} className="time-line"></div>
      <img className="people-story" src={data.storyScreen}></img>
    </div>
  );
}
