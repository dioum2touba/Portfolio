import React, { Component } from 'react';
import NavLink from './NavLink';

class NavItem extends Component {

    render() {
        console.log('1.2 [NavItem.js] rendering...');
        return this.props.menus_list.map((menu, index) => {
            return (
                <NavLink 
                    name={menu.name}
                    id={menu.id}
                    key={menu.id}
                />);
          });
    }
}

export default NavItem;