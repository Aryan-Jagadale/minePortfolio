import React, { useState, useEffect, useRef } from "react";
import "./contact.scss";
import ContactButton from "../../components/ContactButton";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/Footer/Footer";

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
              Don't <br /> Be a <br /> Stranger
            </h1>
            <ContactButton />
          </div>

          <ContactForm />
          <Footer/>
        </div>
        
      </AnimaionContext.Provider>
    </>
  );
};

export default Contact;
