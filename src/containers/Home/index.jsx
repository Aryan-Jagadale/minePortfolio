import React, { useState, useEffect, useRef } from "react";
import ContactButton from "../../components/ContactButton";
import MeMyselfandI from "../../components/MeMyselfandI/MeMyselfandI";
import SkillsIntro from "../../components/SkillsIntro/SkillsIntro";
import Skills from "../../components/Skills/Skills";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import AnimaionContext from "../../context/animation-context";
import Footer from "../../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const Intro = () => {
  const [currentBg, setCurrentBg] = useState("#fff");

  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    });
  }, [currentBg]);

  return (
    <>
      <AnimaionContext.Provider value={{ setCurrentBg }}>
        <div ref={appRef}>
          <div
            className="main-container"
            id="main-container"
            data-scroll-container
          >
            <h1>
              Hello <br /> I am A<span>a</span>RYAN
            </h1>
            <SkillsIntro />

            <ContactButton />
          </div>

          <MeMyselfandI />
          <Skills />
          <Footer/>
        </div>
      </AnimaionContext.Provider>
    </>
  );
};

export default Intro;
