import React from 'react';

const Expertise = (props) => {
    return (
        <div className="col-md-4 text-center animate-box">
            <div className={props.classColor}>
              <span className="icon">
                <i className={props.classIcon}></i>
              </span>
              <div className="desc">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
              </div>
            </div>
        </div>
    );
};

export default Expertise;