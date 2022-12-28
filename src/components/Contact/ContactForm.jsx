import React,{useEffect,useRef,useContext} from "react";
//import GoogleMapReact from "google-map-react";
import "./form.scss";
import AnimaionContext from "../../context/animation-context";


import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);


const ContactForm = () => {

  let secondRef = useRef(null);
  let textRef = useRef(null);

  let animationContext = useContext(AnimaionContext);

  /*const coordinates = {
    lat : 18.6161,
    lng: 73.7286
}*/

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: secondRef.current,
        start: "+=200 70%",
        end: "+=200 60%",
        scrub: true,
        //markers: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg('#1d1d1d');
          gsap.to(textRef.current, {
            color: '#fff',
            duration: 0.5
          });
          
          
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#fff');
          gsap.to(textRef.current, {
            color: '#000',
            duration: 0.5
          });
          

        }
      }
    })
  })


  return (
    <div ref={secondRef} className="form-container">
    {/*Form */}
      <div className="form-text">
        <p ref={textRef} className="form-text-para">
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>

        <div className="form-submit">
          <div className="form-name-email">
            <div>
              <input placeholder="Name" type="text"  />
            </div>
            <div>
              <input placeholder="Email" type="email"  />
            </div>
          </div>

          <div className="form-subject">
            <input placeholder="Subject" type="text"  />
          </div>

          <div className="form-message">
            <textarea placeholder="Message" type="text"  />
          </div>

          <button className="send-button">Send message!</button>
        </div>
      </div>

      {/*Map */}
      {/*<div className="form-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA7lD0fTgQUP7UR8z-45uEQYD1qvAEB-2c" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={10}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onClickChange={""}
        ></GoogleMapReact>
  </div>*/}
    </div>
  );
};

export default ContactForm;
