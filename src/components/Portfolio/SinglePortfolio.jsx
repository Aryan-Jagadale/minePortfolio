const SinglePortfolio = ({
  technologies,
  title,
  image,
  color,
  id,
  github,
  deployed,
  description,
}) => {
  return (
    <div className="card">
      <span className="icon">
        <img
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          alt="Nodejs"
          loading="lazy"
        />
      </span>

      <h4>{title}</h4>

      <div className="see-live">
        <a href={github} target="_blank" rel="noreferrer">
          Github
        </a>

        <a href={deployed} target="_blank" rel="noreferrer">
          See live
        </a>
      </div>

      <h6>{technologies}</h6>

      <p>{description}</p>
      <div className="shine"></div>
      <div className="background">
        <div className="tiles">
          <div className="tile tile-1"></div>
          <div className="tile tile-2"></div>
          <div className="tile tile-3"></div>
          <div className="tile tile-4"></div>

          <div className="tile tile-5"></div>
          <div className="tile tile-6"></div>
          <div className="tile tile-7"></div>
          <div className="tile tile-8"></div>

          <div className="tile tile-9"></div>
          <div className="tile tile-10"></div>
        </div>

        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default SinglePortfolio;
