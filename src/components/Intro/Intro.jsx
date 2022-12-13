import React from "react";
import ContactButton from "../ContactButton";
import Projects from "../Projects/Projects";

const Intro = () => {
  return (
    <>
      <div className="main-container" id="main-container">
        
          <h1>
            Ryan <br /> Blank <br /> Webapp
          </h1>
          <ContactButton />
        
        </div>
        <Projects />
    </>
  );
};

export default Intro;
