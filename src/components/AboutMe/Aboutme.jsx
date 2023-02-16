import React, { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./aboutme.scss";

import AnimaionContext from "../../context/animation-context";

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const Aboutme = () => {
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
            duration: 0.5,
          });
          gsap.to(paraRef.current, {
            color: "#b2b2b2",
            duration: 0.5,
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
            duration: 0.5,
          });
        },
      },
    });
  });

  return (
    <div ref={divRef} className="me-wrapper">
      <div className="me-division">
        <h2 ref={colorRef} className="me-title">
        Personal introduction
        </h2>

        <p ref={paraRef} className="me-para">
          Welcome to my website! My name is Aaryan Jagadale, and I am Full Stack
          Web Developer. I created this website to share my passion and to
          connect with like-minded individuals.
        </p>

        <p ref={paraRef} className="me-para">
          <span style={{ color: "white" }}>A little bit about me:</span> For over 2.5 years, I've been living in Pune, India and working in the web field where I've gained knowledge about various topics such as networks, database management services, CMS, cloud computing, and more. This website is a way for me to share my knowledge and
          experiences with others who share my passion.
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
            Let's make something special !
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
