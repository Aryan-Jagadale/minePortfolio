import React from "react";
import "./skills.scss";
import { LineProgressBar } from "@frogress/line";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="big-wrapper">
        <div className="left-wrap">
          <h2>Skills & Experience</h2>
          <p>
            Since beginning my journey as a freelance developer nearly 10 years
            ago, I’ve done remote work for agencies, consulted for startups, and
            collaborated with talented people to create web products for both
            business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts.
          </p>

          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts.
          </p>
          <p>
            Visit my <span>LinkedIn Profile</span> or Contact me.
          </p>
        </div>
        <div className="right-wrap">
          <div className="skills-progress">
            <div className="skills-item">
              <h3>Frontend</h3>
              <LineProgressBar percent={75} rounded={36} height={5} />
            </div>

            <div className="skills-item">
              <h3>Backend</h3>
              <LineProgressBar
                percent={50}
                rounded={36}
                height={5}
                progressColor="linear-gradient(to right, #ff655b 60%, #fd297b)"
                containerColor="#f0d4da"
              />
            </div>

            <div className="skills-item">
              <h3>Reactjs</h3>
              <LineProgressBar
                percent={90}
                rounded={36}
                height={5}
                progressColor="linear-gradient(to right, #ff5beb 60%, #d300ff)"
                containerColor="#f0d4da"
              />
            </div>

            <div className="skills-item">
              <h3>Docker</h3>
              <LineProgressBar
                percent={70}
                rounded={36}
                height={5}
                progressColor="linear-gradient(to right, rgb(101 255 91) 60%, rgb(144 225 112))"
                containerColor="#ccf4c9"
              />
            </div>

            <div className="skills-item">
              <h3>Google Cloud</h3>
              <LineProgressBar
                percent={90}
                rounded={36}
                height={5}
                progressColor="linear-gradient(to right, #ff8133 60%, rgb(255 146 70))"
                containerColor="#ffdcc7"
              />
            </div>



          </div>

          {/*<div className="card-experience">
            <div className="card">
              <h3>Frontend Developer</h3>
              <h5>TedxVit Pune</h5>
              <p>2022-Present</p>
              <p>
                Award-winning Content Marketing Agency specialises in creating
                and sharing engaging content.
              </p>
            </div>
  </div>*/}

        </div>
      </div>
    </div>
  );
};

export default Skills;
