import React, { Component } from "react";
import Profile from "./Profile.js";
import Loader from "./../Loader/Loader.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, refreshText} from './../../redux/reducers/profile_reducer.js'

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    textMenu: state.profile.textMenu
  }
}

let mapDispatchToProps = {
    refreshText,
    setUserProfile
}

class ProfileContainer extends Component {
    componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/profile/1200")
          .then(response => {
              this.props.setUserProfile(response.data);
          });
    }
    render() {
        return (
          <div>
              {this.props.profile
                ? <Profile profile={this.props.profile}/>
                : <Loader />}
          </div>
        );
    }
}

const ProfileComponent = connect(mapStateToProps,mapDispatchToProps)(ProfileContainer);

export default ProfileComponent;
