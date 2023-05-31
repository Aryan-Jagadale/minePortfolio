import React from "react";
import "./style.scss";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import projectData from "./projectsData.json";
import SinglePortfolio from "./SinglePortfolio";
import "./card.scss";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project) => (
      <SinglePortfolio
        key={project.id}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <>
      <div className="me-wrapper">
        <div className="me-division">
          <h2 className="me-title">Projects</h2>
          <div className="me-grid">
            <ProjectList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
