import React from 'react';
import Expertises from './details/Expertises';

const Service = (props) => {
  return (
    <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{props.whatIdo}</span>
            <h2 className="colorlib-heading">{props.expertise}</h2>
          </div>
        </div>
        <Expertises 
          rows={props.rows}
        />
      </div>
    </section>
  );
};

export default Service;
