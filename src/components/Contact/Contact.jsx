import React, { useState, useEffect, useRef } from "react";
import ContactButton from "../ContactButton";
import "./contact.scss";
import ContactForm from "./ContactForm";
import AnimaionContext from "../../context/animation-context";

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const Contact = () => {
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
          <div className="contact-container" id="contact-container">
            <h1>
              Don't <br /> Be a <br /> Stranger.
            </h1>
            <ContactButton />
          </div>

          <ContactForm />
        </div>
        
      </AnimaionContext.Provider>
    </>
  );
};

export default Contact;
