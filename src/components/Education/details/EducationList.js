import React, { Component } from "react";
import EducationDetail from './EducationDetail';

class EducationList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div className="fancy-collapse-panel">
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
                {
                    this.props.rows.map((elt, key) => {
                        return (
                            <EducationDetail
                                id={elt.id}
                                classLink={elt.classLink}
                                title={elt.title}
                                expanded={elt.expanded}
                                classCollapse={elt.classCollapse}
                                classPanel={elt.classPanel}
                                classYear={elt.classYear}
                                content={elt.content}
                                key={key}
                            />
                        )
                    })
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationList;
