import React from "react";
import "./skills.scss";
import { LineProgressBar } from "@frogress/line";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div data-scroll-section className="skills-wrapper">
      <div className="big-wrapper">
        <div className="left-wrap">
          <h2>Skills & Experience</h2>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices.
          </p>

          <p>
            The main area of my expertise is front-end development, HTML, CSS,
            JS, building small and medium web apps, custom plugins, features,
            animations, and coding interactive layouts.
          </p>
          <p>
            Currently working as TedxVITPune Web-Developer Head.
          </p>

          <p>
            Visit my{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/aryan-jagadale-0a0a69203/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                LinkedIn Profile
              </a>
            </span>{" "}
            or <Link to="/collab">Contact me</Link>.
          </p>
        </div>
        <div className="right-wrap">
          <div className="skills-progress">
            <div className="skills-item">
              <h3>Frontend</h3>
              <LineProgressBar percent={65} rounded={36} height={3} />
            </div>

            <div className="skills-item">
              <h3>Backend</h3>
              <LineProgressBar
                percent={50}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, #ff655b 60%, #fd297b)"
                containerColor="#f0d4da"
              />
            </div>

            <div className="skills-item">
              <h3>Reactjs</h3>
              <LineProgressBar
                percent={80}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, #ff5beb 60%, #d300ff)"
                containerColor="#f0d4da"
              />
            </div>

            <div className="skills-item">
              <h3>Docker</h3>
              <LineProgressBar
                percent={70}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, rgb(101 255 91) 60%, rgb(144 225 112))"
                containerColor="#ccf4c9"
              />
            </div>

            <div className="skills-item">
              <h3>Google Cloud</h3>
              <LineProgressBar
                percent={70}
                rounded={36}
                height={3}
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


