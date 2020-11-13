import React from 'react';
import ExperienceList from './details/ExperienceList';

const Experience = (props) => {
  return (
    <section className="colorlib-experience" data-section="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{props.title}</span>
            <h2 className="colorlib-heading animate-box">{props.content}</h2>
          </div>
        </div>
        <ExperienceList rows={props.rows}>
          <article
            className="timeline-entry begin animate-box"
            data-animate-effect="fadeInBottom"
          >
            <div className="timeline-entry-inner">
              <div className="timeline-icon color-none"></div>
            </div>
          </article>
        </ExperienceList>   
      </div>
    </section>
  );
};

export default Experience;
