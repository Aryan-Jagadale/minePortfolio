import React from "react";
import ContactButton from "../ContactButton";
//import Projects from "../Projects/Projects";
import MeMyselfandI from "../MeMyselfandI/MeMyselfandI";
import Skills from "../Skills/Skills";
//import ScrollComp from "../ScrollComp/ScrollComp";
import SkillsIntro from "../SkillsIntro/SkillsIntro";

const Intro = () => {
  return (
    <>
      <div className="main-container" id="main-container" data-scroll-container>
      
        <h1>
          Hello <br/> I am A<span>a</span>RYAN
        </h1>
        <SkillsIntro />
        
        <ContactButton />
        </div>
      {/*<ScrollComp />*/}
      <MeMyselfandI />
      <Skills />
      {/*<Projects />*/}
    </>
  );
};

export default Intro;
