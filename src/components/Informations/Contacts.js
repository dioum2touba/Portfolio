import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    render() {
        console.log('2.2 [Contacts.js] rendering...');
        return (
            <div className="CapsuleContact">
            {this.props.informations_list.map((list, index) => {
            return (
                <Contact 
                    Label={list.Label}
                    Value={list.Valeur}
                    key={index}
                />
            );
        })}</div>);        
    }
}

export default Contacts;