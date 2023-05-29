import React, { useState } from "react";
import Menu from "../Menu";
import Reels from "../../assets/Dandelions.mp3";
import "./styles.scss";
const audio = new Audio(Reels);

const Header = () => {
  const [on, setOn] = useState(false);
  audio.loop = true;

  const handleAudio = () => {
    if (!on) {
      audio.play();
      return setOn(true);
    } else {
      audio.currentTime = 0;
      audio.pause();
      return setOn(false);
    }
  };

  return (
    <div className="header-wrap">
      <button
        className="brand-description"
        onClick={handleAudio}
        
      >
        <span>Sound {!on ? "On" : "Off"}</span>
      </button>

      <Menu />
    </div>
  );
};

export default Header;
