import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Menu extends Component {
    render() {
        let path = "/" + this.props.id;
        return (
            <div>
                <Link to={path} className="menu">
                    <p>
                        {this.props.name}
                    </p>
                </Link>
            </div>
        );
    }
}

export default Menu;
