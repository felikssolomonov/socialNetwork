import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        let path = "/" + this.props.link;
        return (
            <div>
                <NavLink to={path} className="menu">
                    <p>
                        {this.props.name}
                    </p>
                </NavLink>
            </div>
        );
    }
}

export default Menu;
