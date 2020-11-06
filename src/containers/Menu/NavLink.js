import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class NavLink extends Component {
  render() {
    console.log(' 1.1 [NavLink.js] rendering...');
    return (
      <Nav.Item>
        <Nav.Link eventKey={this.props.id}>
          <i className="fa fa-bookmark" aria-hidden="true">
            {" "}
          </i>{" "}
          {this.props.name}
        </Nav.Link>
      </Nav.Item>
    );
  }
}

export default NavLink;
