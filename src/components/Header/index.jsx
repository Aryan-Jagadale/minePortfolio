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
      console.log("On");
      audio.play();
      return setOn(true);
    } else {
      console.log("Off");
      audio.currentTime = 0;
      audio.pause();
      return setOn(false);
    }
  };

  return (
    <div className="header-wrap">
      <p
        className="brand-description"
        onClick={handleAudio}
        style={{
          cursor: "pointer",
          fontFamily: "Poppins ,sans-serif",
        }}
      >
        Sound {!on ? "On" : "Off"}
      </p>

      <Menu />
    </div>
  );
};

export default Header;
