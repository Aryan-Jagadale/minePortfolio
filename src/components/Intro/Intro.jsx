import React from "react";
import ContactButton from "../ContactButton";
import Projects from "../Projects/Projects";
import MeMyselfandI from "../MeMyselfandI/MeMyselfandI";
import Skills from "../Skills/Skills";

const Intro = () => {
  return (
    <>
      <div className="main-container" id="main-container">
        <h1>
          Ryan <br /> Blank <br /> Webapp
        </h1>
        <ContactButton />
      </div>
      <Skills />
      <MeMyselfandI />
      <Projects />
    </>
  );
};

export default Intro;
