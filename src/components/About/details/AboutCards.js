import React, { Component } from 'react';
import AboutDiv from './AboutDiv';

class AboutCards extends Component {
  render() {
    console.log('[AboutCards.js] rendering...');
    return (
      <div className="row">
        {this.props.rows.map((elt, index) => {
          return (
            <AboutDiv
              classCol={elt.classCol}
              dataAnimateEffect={elt.dataAnimateEffect}
              classServices={elt.classServices}
              classIcon={elt.classIcon}
              titleH3={elt.titleH3}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default AboutCards;
