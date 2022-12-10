import React from "react";
import "../styles/toolkit.scss";

const ToolKit = () => {
  //const inspiration = "Inspiration".split("");

  return (
    <div className="toolkit-wrapper" id="toolkit-wrapper">
      <h1>INSPIRATION</h1>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </p>

      <section className="first-wrapper">
        <div className="ai-free">
          <p className="ai-free-styles">AI FREE TOOLS</p>
          <p className="ai-free-styles">FREE SAMPLES</p>
        </div>

        <div className="chart">
          <p className="chart-style">CHART</p>

          <p className="s-a-k">SOFTWARE ACTIVATION KEY</p>
          <p className="ai-write">AI Auto Writing Tool</p>
          <p className="web-builder">WEBSITE BUILDER WITHOUT CODING</p>
        </div>
      </section>

      <section className="second-wrapper">
        <div className="wrapp">
          <p className="marketing">MARKETING</p>
          <p className="grid">GRID GENERATOR</p>
          <p className="icon">3D-ICONS</p>
        </div>
        {/*<p className="illustrations">ILLUSTRATIONS</p>*/}
        <div className="idea-clip">
          <span className="idea">IDEA GENERATOR</span>
          <span className="clip">CLIP-PATH MAKER</span>
          <span className="clip">ILLUSTRATIONS</span>
        </div>
      </section>

      <section className="third-wrapper">
        <p className="content-1">Anonyoumus Animation Images 2D-Icon Mockups Blog Must-Check </p>
      </section>
    </div>
  );
};

export default ToolKit;
