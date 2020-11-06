import Entete from "../components/Entete/Entete";
import Menu from "./Menu";
import "./App.css";
// or less ideally
import { Container, Col } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    menus_list: [
      {id: 'Informations', name: 'Informations'},
      {id: 'Experience', name: "Année(s) d'expérience"},
      {id: 'Education', name: 'Education'},
      {id: 'CompetenceGeneral', name: 'Compétences générales'},
      {id: 'CompetenceTechniques', name: 'Compétences techniques'},
      {id: 'ExperiencesProfessionnelles', name: 'Expériences professionnelles'},
      {id: 'Langues', name: 'Langues'},
    ],
    
    informations_list: [
      {Label: "E-mail 1:", Valeur: "dioum2touba@gmail.com"},
      {Label: "E-mail 2:", Valeur: "serignesaliou.dioum@ucad.edu.sn"},
      {Label: "Téléphone 1:", Valeur: "(+221) 77 279 62 45"},
      {Label: "Téléphone 2:", Valeur: "(+221) 76 188 35 12"},
    ],

    anne_experience: [

    ],
  }

  render() {
    return (
      <div className="App">
        <Container className="debut">
          <Entete name="Serigne Saliou Mbacké Dioum" cvH2="cvH2" cvP="cvP" />
        </Container>
        <br />
        <Container>
            <Col>
              <Menu 
                menus_list={this.state.menus_list}
                informations_list={this.state.informations_list}              
              />
            </Col>
        </Container>
        {/*
      <Entete name="Serigne Saliou Mbacké Dioum" cvH2="cvH2" cvP="cvP"/>
        <EnteteRight indicatif="+221" numeroOrange="77 279 62 45" numeroTigo="76 188 35 12" />
        <Teteexperience /> */}
      </div>
    );
  }
}

export default App;
