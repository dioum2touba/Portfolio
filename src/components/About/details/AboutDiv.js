import React from 'react';

const AboutDiv = (props) => {
  return (
    <div
      className={props.classCol}
      data-animate-effect={props.dataAnimateEffect}
    >
      <div className={props.classServices}>
        <span className="icon2">
          <i className={props.classIcon}></i>
        </span>
        <h3>{props.titleH3}</h3>
      </div>
    </div>
  );
};

export default AboutDiv;
