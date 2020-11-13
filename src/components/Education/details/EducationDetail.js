import React from "react";

const EducationDetail = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id={props.id}>
        <h4 className="panel-title">
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={props.classLink}
            aria-expanded={props.expanded}
            aria-controls={props.classCollapse}
          >
            {props.title}
          </a>
        </h4>
      </div>
      <div
        id={props.classCollapse}
        className={props.classPanel}
        role="tabpanel"
        aria-labelledby={props.id}
      >
        <div className="panel-body">
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li> {props.classYear} </li>
              </ul>
            </div>
            <div className="col-md-9">
              <p> {props.content} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
