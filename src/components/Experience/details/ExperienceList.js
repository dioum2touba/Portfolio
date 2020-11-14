import React, { Component } from "react";
import ExperienceDetail from './ExperienceDetail';

class ExperienceList extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="timeline-centered">
                    {
                        this.props.rows.map((elt, key) => {
                            return (
                                <ExperienceDetail
                                    classEffet={elt.classEffet}
                                    classColor={elt.classColor}
                                    classLink={elt.classLink}
                                    classYear={elt.classYear}
                                    content={elt.content}
                                    fonction={elt.fonction}
                                    key={key}
                                />
                            )
                        })
                    }
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}

export default ExperienceList;
