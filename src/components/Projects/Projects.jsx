import React from "react";
import "./styles.scss";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin’s",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
  /*{
    id: 4,
    subtitle: "Trail",
    title: "A custom formula for your skin’s",
    img: "curology-min",
  },*/
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="portfolio">
        <h2 className="port-title">My Portfolio</h2>
        <p className="port-para">
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing people from companies around the globe. It's
          only a drop in the ocean compared to the entire list.
          Interested to see more? Visit <span>my work</span> page
        </p>
      </div>

      <div className="row">
        {caseStudies.map((caseItem) => {
          return (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>

              <div className="case-images">
                <img
                  src={require(`../../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
