import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";


const MeMyselfandI = () => {
  return (
    <div className="me-wrapper">
      <div className="me-division">
        <h2 className="me-title">Me, Myself & I</h2>
        <p className="me-para">
          Since VLC Media Player was a complete innovation, alongside with CSS 3.0, HTML 5.0 and ES6 as standards of the current web I've been passionate
          about web.
        </p>
        <p className="me-para">
          For over a year I had many opportunities to work in a vast spectrum
          of <span style={{color:"black"}}>web technologies</span> what let me gather a significant amount of various experience.
          Working for clients and individuals around the globe I met and
          learnt from amazing and ambitious people.
        </p>
        <p className="me-para">
        I look forward to the opportunity to work with you and help bring your vision to life.
        </p>
        <p className="me-para"><Link to="/collab" style={{
          textDecoration:"underline",
          cursor:"pointer"
        }}>Let's make something special</Link></p>
      </div>
    </div>
  );
};

export default MeMyselfandI;
