import React, { useEffect, useState, useRef } from "react";
import Aboutme from "../../components/AboutMe/Aboutme";
import ContactButton from "../../components/ContactButton";
import Footer from "../../components/Footer/Footer";
import "./about.scss";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import AnimaionContext from "../../context/animation-context";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const About = () => {
  const [currentBg, setCurrentBg] = useState("#fff");

  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    });
  }, [currentBg]);
  return (
    <AnimaionContext.Provider value={{ setCurrentBg }}>
      <div ref={appRef}>
        <div
          className="about-container"
          id="about-container"
          data-scroll-container
        >
          <h1>
            Sooo,
            <br />
            who am I ?
          </h1>
          <ContactButton />
        </div>
        <Aboutme />

        <Footer />
      </div>
    </AnimaionContext.Provider>
  );
};

export default About;
