import React, { Component } from "react";
import Profile from "./Profile.js";
import Loader from "./../Loader/Loader.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, refreshText} from './../../redux/reducers/profile_reducer.js'
import {withRouter} from "react-router-dom";

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
      let userId = this.props.match.params.userId;
      if (!userId) {
        userId = 1200;
      }
      axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+userId)
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

let WR = withRouter(ProfileContainer);

const ProfileComponent = connect(mapStateToProps,mapDispatchToProps)(WR);

export default ProfileComponent;
