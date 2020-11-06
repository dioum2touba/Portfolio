import React from 'react';
import './Entete.css';

const EnteteRight = (props) => {
    return (
        <div className="enteteRight">
            <i className="fa fa-phone">  ({(props.indicatif)})  {props.numeroOrange} - {props.numeroTigo}</i>
        </div>
    );
};

export default EnteteRight;