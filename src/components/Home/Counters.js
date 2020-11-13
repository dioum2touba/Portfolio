import React from 'react';
import cover_bg_1 from '../../assets/images/cover_bg_1.jpg';
import Countes from './counterdetails/Countes';

const Counters = (props) => {
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
        <Countes counter={props.counter} />
      </div>
    </div>
  );
};

export default Counters;
