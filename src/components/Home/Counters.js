import React from 'react';
import cover_bg_1 from '../../assets/images/cover_bg_1.jpg';

const Counters = () => {
  return (
    <div
      id="colorlib-counter"
      className="colorlib-counters"
      style={{ backgroundImage: `url(${cover_bg_1})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="colorlib-narrow-content">
        <div className="row"></div>
        <div className="row">
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from="0"
              data-to="09"
              data-speed="5000"
              data-refresh-interval="50"
            ></span>
            <span className="colorlib-counter-label">Cups of coffee</span>
          </div>
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from="0"
              data-to="56"
              data-speed="5000"
              data-refresh-interval="50"
            ></span>
            <span className="colorlib-counter-label">Projects</span>
          </div>
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from="0"
              data-to="07"
              data-speed="5000"
              data-refresh-interval="50"
            ></span>
            <span className="colorlib-counter-label">Clients</span>
          </div>
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from="0"
              data-to="10"
              data-speed="5000"
              data-refresh-interval="50"
            ></span>
            <span className="colorlib-counter-label">Partners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
