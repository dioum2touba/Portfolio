import React from 'react';
import './Entete.css';

const Entete = (props) => {
    return (
        <div className="enTete">
            <h2 className={props.cvH2}>{props.name}</h2>
            <p className={props.cvP}>Curriculum Vitae</p>
        </div>
    );
};

export default Entete;