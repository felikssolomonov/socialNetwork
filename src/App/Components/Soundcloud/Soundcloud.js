import React, { Component } from "react";

class Soundcloud extends Component {
    render() {
        return (
            <div>
            {
              this.props.tracks.map((track, key) => {
                return <div key={key}>{track.title}</div>;
              })
            }
            </div>
        );
    }
}

export default Soundcloud;
