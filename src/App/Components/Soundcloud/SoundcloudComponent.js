import React, { Component } from "react";
import Soundcloud from "./Soundcloud.js";
import {connect} from "react-redux";
import {setTracks} from './../../redux/reducers/soundcloud_reducer.js';
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from "redux";
import * as axios from "axios";
import VK, { Auth } from "react-vk";

{
// let mapStateToProps = (state) => {
//   return {
//     tracks: state.soundcloud.tracks,
//     pageSize: state.soundcloud.pageSize
//   }
// }
//
// let mapDispatchToProps = {
//     setTracks
// }
//
// class SoundcloudComponent extends Component {
//     componentDidMount() {
//     }
//     render() {
//         return (
//           <div>
//               <VK apiId={7054846}>
//                   <Auth />
//               </VK>
//           </div>
//         );
//     }
// }
//
// SoundcloudComponent = compose(
//   connect(mapStateToProps,mapDispatchToProps),
//   withAuthRedirect
// )(SoundcloudComponent);
}

class SoundcloudComponent extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default SoundcloudComponent;
