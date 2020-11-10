import React from 'react';
import AboutCards from './details/AboutCards';

const About = (props) => {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">{props.title}</span>
                  <h2 className="colorlib-heading">{props.quisommenous}</h2>
                  <p>
                    <strong>
                      {props.intro} {props.name}
                    </strong>{' '}
                    {props.presentation1}
                  </p>
                  <p>{props.presentation2}</p>
                </div>
              </div>
            </div>
            <AboutCards rows={props.rows} />
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="hire">
                  <h2>{props.appreciate}</h2>
                  <a href="#" className="btn-hire">
                    {props.Hireme}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
