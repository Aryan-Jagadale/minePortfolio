import React from "react";
import "./case.scss"

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin’s unique needs",
    img: "1"
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: "2"
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "3"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            {"<--"}
          </div>
          <div className='cases-arrow next'>
            {"-->"}
          </div>
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../../../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;