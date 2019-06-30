import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                {this.props.login}
            </div>
        );
    }
}

export default Header;
