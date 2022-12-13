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
    title: "Open space floor plans for you next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  }
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      
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
