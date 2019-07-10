import React, { Component } from "react";
import {connect} from "react-redux";
import {setTracks} from './../../redux/reducers/soundcloud_reducer.js';
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';

let mapStateToProps = (state) => {
  return {
    tracks: state.soundcloud.tracks,
    pageSize: state.soundcloud.pageSize
  }
}

let mapDispatchToProps = {
    setTracks
}

class SoundcloudComponent extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div>
              <Soundcloud tracks={this.props.tracks} />
          </div>
        );
    }
}

SoundcloudComponent = withAuthRedirect(SoundcloudComponent);

SoundcloudComponent = connect(mapStateToProps,mapDispatchToProps)(SoundcloudComponent);

export default SoundcloudComponent;
