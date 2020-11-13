import React, { Component } from 'react';
import SkillCompetence from './SkillCompetence';

class SkillCompetences extends Component {
    render() {
        return (
            <div className="row">          
                {
                    this.props.rows.map((elt, key) => {
                        return (
                            <SkillCompetence
                                classEffet={elt.classEffet}
                                title={elt.title}
                                classColor={elt.classColor}
                                valuePercent={elt.valuePercent}
                                key={key}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default SkillCompetences;