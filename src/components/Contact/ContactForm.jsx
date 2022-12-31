import React, { useEffect, useRef, useContext } from "react";
import "./form.scss";
import AnimaionContext from "../../context/animation-context";
import emailjs from "@emailjs/browser";
import { addToast } from "../../utils/toast";



import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const ContactForm = () => {
  let secondRef = useRef(null);
  let textRef = useRef(null);
  const formRef = useRef();

  let animationContext = useContext(AnimaionContext);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_PUBLIC_KEY
    ).then((result)=>{
        addToast(true,"Email send successfully")
    }).catch((error)=>{
      addToast(false,"Something went wrong!")
      
    })

  };

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: secondRef.current,
        start: "+=200 70%",
        end: "+=200 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg("#1d1d1d");
          gsap.to(textRef.current, {
            color: "#fff",
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg("#fff");
          gsap.to(textRef.current, {
            color: "#6b6b6b",
            duration: 0.5,
          });
        },
      },
    });
  });

  return (
    <div ref={secondRef} className="form-container">
      {/*Form  ServiceId --- service_1ko88ke,templated id---template_ul04cnf  */}
      <div className="form-text">
        <p ref={textRef} className="form-text-para">
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>

        <form className="form-submit" ref={formRef} onSubmit={sendEmail}>
          <div className="form-name-email">
            <div className="fne-1">
              <input placeholder="Name" type="text" name="name" required />
            </div>

            <div className="fne-2">
              <input placeholder="Email" type="email" name="email" required />
            </div>
          </div>

          <div className="form-subject">
            <input placeholder="Subject" type="text" name="subject" required />
          </div>

          <div className="form-message">
            <textarea
              placeholder="Message"
              type="text"
              rows={"20"}
              name="message"
              required
            />
          </div>

          <button className="send-button" type="submit">
            Send message!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
