import React from "react";
import "./style.scss";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import projectData from "./projectsData.json";
import SinglePortfolio from "./SinglePortfolio";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <SinglePortfolio
        key={i}
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
          <h2 className="me-title">Portfolio</h2>
          <ProjectList />
          </div>

      </div>
    </>
  );
};

export default Portfolio;
