import React from "react";

const SkillCompetence = (props) => {
  return (
    <div
      className="col-md-6 animate-box"
      data-animate-effect={props.classEffet}
    >
      <div className="progress-wrap">
        <h3>{props.title}</h3>
        <div className="progress">
          <div
            className={props.classColor}
            role="progressbar"
            aria-valuenow={props.valuePercent}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>{props.valuePercent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCompetence;
