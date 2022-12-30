import React, { useEffect, useRef, useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import AnimaionContext from "../../context/animation-context";

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const MeMyselfandI = () => {
  let divRef = useRef(null);
  let colorRef = useRef(null);
  let linkRef = useRef(null);
  
  let paraRef = useRef(null);

  let animationContext = useContext(AnimaionContext);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "+=200 80%",
        end: "+=200 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg("#1d1d1d");
          gsap.to(colorRef.current, {
            color: "#fff",
            duration: 0.5,
          });
          gsap.to(linkRef.current, {
            color: "#fff",
            duration:0.5
          });
          gsap.to(paraRef.current, {
            color: "#b2b2b2",
            duration:0.5
          });
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg("#fff");
          gsap.to(colorRef.current, {
            color: "#111",
            duration: 0.5,
          });
          gsap.to(linkRef.current, {
            color: "#111",
            duration:0.5
          });
        },
      },
    });
  });

  return (
    <div ref={divRef} className="me-wrapper">
      <div className="me-division">
        <h2 ref={colorRef} className="me-title">
          Me, Myself & I
        </h2>

        <p ref={paraRef} className="me-para">
          Since VLC Media Player was a complete innovation, alongside with CSS
          3.0, HTML 5.0 and ES6 as standards of the current web I've been
          passionate about web.
        </p>

        <p ref={paraRef} className="me-para">
          For over a year I had many opportunities to work in a vast spectrum of{" "}
          <span style={{ color: "white" }}> web technologies</span> what let me
          gather a significant amount of various experience. Working for clients
          and individuals around the globe I met and learnt from amazing and
          ambitious people.
        </p>
        
        <p ref={paraRef} className="me-para">
          I look forward to the opportunity to work with you and help bring your
          vision to life.
        </p>

        <p ref={linkRef} className="me-para">
          <Link
            to="/collab"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Let's make something special
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MeMyselfandI;
