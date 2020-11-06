// or less ideally
import { Tab, Row, Col, Nav } from "react-bootstrap";
import React from "react";
import "./App.css";
import NavItem from "./Menu/NavItem";
import Contacts from '../components/Informations/Contacts';
import TabPaneItem from './Menu/TabPaneItem';
import Informations from '../components/Informations/Informations';

const Menu = (props) => {
  return (
    <div className="menu">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={4}>
            <Nav variant="pills" className="flex-column">
              <NavItem menus_list={props.menus_list} />
            </Nav>
          </Col>
          <Col sm={8} className="contentHalfLeft">
            <Tab.Content>
              <TabPaneItem eventKey="Informations">
                <Informations Infos="Informations" />
                <Contacts informations_list={props.informations_list} />
              </TabPaneItem>
              <TabPaneItem eventKey="Experience">
                <Informations Infos="Année(s) d'expérience" />
              </TabPaneItem>
              <TabPaneItem eventKey="Education">
                <Informations Infos="Education" />
              </TabPaneItem>
              <TabPaneItem eventKey="CompetenceGeneral">
                <Informations Infos="Compétences générales" />
              </TabPaneItem>
              <TabPaneItem eventKey="CompetenceTechniques">
                <Informations Infos="Compétences techniques" />
              </TabPaneItem>
              <TabPaneItem eventKey="ExperiencesProfessionnelles">
                <Informations Infos="Expériences professionnelles" />
              </TabPaneItem>
              <TabPaneItem eventKey="Langues">
                <Informations Infos="Langues" />
              </TabPaneItem>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Menu;
