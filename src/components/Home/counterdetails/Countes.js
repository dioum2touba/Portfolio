import React, { Component } from 'react';
import Counte from './Counte';

class Countes extends Component {

    render() {
        return (
            <div className="row">
                {
                    this.props.counter.map((elt, key) => {
                        return (
                            <Counte
                                nombre={elt.nombre}
                                title={elt.title}
                                key={key}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Countes;