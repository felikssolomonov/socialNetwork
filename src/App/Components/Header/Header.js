import React, { Component } from "react";
import Menu from './../Menu/Menu.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        let menu = this.props.menu.map( item =>
          <Menu link={item.link} name={item.name}/>
        );
        return (
            <div className="header">
                {menu}
            </div>
        );
    }
}

export default Header;
