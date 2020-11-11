import React, { Component } from 'react';
import Expertise from './Expertise';

class Expertises extends Component {

    render() {
        return (
            <div className="row row-pt-md">
                {
                    this.props.rows.map((elt, key) => {
                        return (
                            <Expertise
                                classColor={elt.classColor}
                                classIcon={elt.classIcon}
                                title={elt.title}
                                content={elt.content}
                                key={key}
                            />
                        );
                    })
                }
            </div>
        )        
    }
}

export default Expertises;