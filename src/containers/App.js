import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import data from '../assets/data/data.json';

class App extends Component {
  state = {
    name: 'Serigne Saliou Dioum',
    profession: 'Développeur/Analyste',
    addres: 'au Sénégal',
  };

  render() {
    return (
      <div className="App">
        <div id="colorlib-page">
          <Layout
            name={this.state.name}
            profession={this.state.profession}
            addres={this.state.addres}
            about={data.about}
          />
        </div>
      </div>
    );
  }
}

export default App;
