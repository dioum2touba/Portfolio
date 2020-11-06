import React, {Component} from "react";
import { Tab } from "react-bootstrap";

class TabPaneItem extends Component {
  render() {
    console.log('2.1 [TabPaneItem.js] rendering...');
    return (
    <Tab.Pane eventKey={this.props.eventKey}>
        {this.props.children}
    </Tab.Pane>
    );
  }
}

export default TabPaneItem;
