import React from "react";
import Menu from "../Menu";
import Reels from "../../assets/Dandelions.mp3";
import "./styles.scss";


const Header = () => {
  //const [on, setOn] = useState('On')
  const audio = new Audio(Reels);
  audio.loop = true;

  

  return (
    <div className="header-wrap">
      <p
        className="brand-description"
        onClick={() =>{
          audio.loop = true;
              audio.play();
        }}
        
        style={{
          cursor:"pointer"
        }}
      >
        Sound on
      </p>
      
      <Menu />
    </div>
  );
};

export default Header;
