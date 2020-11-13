import React from 'react';

const Counte = (props) => {
    return (
        <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from="0"
              data-to={props.nombre}
              data-speed="5000"
              data-refresh-interval="50"
            ></span>
            <span className="colorlib-counter-label">{props.title}</span>
        </div>
    );
};

export default Counte;