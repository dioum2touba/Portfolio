import React, { Component } from 'react';
import TabPaneItem from './TabPaneItem';
import Informations from '../../components/Informations/Informations';

class TabPane extends Component {

    render() {
        console.log('2.2 [TabPane.js] rendering...');
        return this.props.menusTab_list.map((menu, index) => {
            return (
                <TabPaneItem 
                    key={index}
                    eventKey={menu.id}>
                    <Informations Infos={menu.name} />
                </TabPaneItem>);
          });
    }
}

export default TabPane;


//  <p key="i2">{this.props.children}</p>