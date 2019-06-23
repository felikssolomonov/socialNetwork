import React, { Component } from "react";
import Menu from './../Menu/Menu.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class Sidebar extends Component {
    render() {
        let menu = this.props.menu.map( item =>
          <Menu link={item.link} name={item.name}/>
        );
        return (
            <div className="sidebar">
                {menu}
            </div>
        );
    }
}

export default Sidebar;
