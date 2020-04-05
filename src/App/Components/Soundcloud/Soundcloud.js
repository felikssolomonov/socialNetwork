import React, { Component } from "react";

class Soundcloud extends Component {
    render() {
        return (
            <div>
            {
              this.props.tracks
            }
            </div>
        );
    }
}

export default Soundcloud;
