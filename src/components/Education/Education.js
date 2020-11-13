import React from 'react';
import EducationList from './details/EducationList';

const Education = (props) => {
  return (
    <section className="colorlib-education" data-section="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta"> {props.tile1} </span>
            <h2 className="colorlib-heading animate-box"> {props.tile2} </h2>
          </div>
        </div>
        <EducationList 
          rows={props.rows}
        />
      </div>
    </section>
  );
};

export default Education;
