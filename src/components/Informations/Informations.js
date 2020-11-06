import React from "react";
import "./Informations.css";

const Informations = (props) => {
  return (
    <div className="informations">
      <i className="fa fa-briefcase" aria-hidden="true">
        {" "}
      </i>{" "}
      <span className="titleInformation"> {props.Infos}</span>
    </div>
  );
};

export default Informations;
