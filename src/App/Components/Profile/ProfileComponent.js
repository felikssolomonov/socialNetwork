import React, { Component } from "react";
import Profile from "./Profile.js";
import Loader from "./../Loader/Loader.js";
import {connect} from "react-redux";
import {setUserProfile, refreshText, setFollowing} from './../../redux/reducers/profile_reducer.js'
import {withRouter} from "react-router-dom";
import {usersAPI} from "./../../API/api.js";

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    textMenu: state.profile.textMenu,
    followed: state.profile.followed,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.userId
  }
}

let mapDispatchToProps = {
    refreshText,
    setUserProfile,
    setFollowing
}

class ProfileContainer extends Component {
    componentDidMount() {
      let f = () => {
        usersAPI.getProfileAPI(userId)
          .then(response => {
              this.props.setUserProfile(response);
          });
        usersAPI.getFollowAPI(userId)
          .then(response => {
              this.props.setFollowing(response);
          });
      }
      let userId = this.props.match.params.userId;
      if (userId) {
        f();
      }
      else if (this.props.isAuth) {
        userId = this.props.authUserId;
        f();
      }
    }
    render() {
        return (
          <div>
              {this.props.profile
                ? <Profile  profile={this.props.profile}
                            followed={this.props.followed}
                            setFollowing={this.props.setFollowing}/>
                : <Loader />}
          </div>
        );
    }
}

let WR = withRouter(ProfileContainer);

const ProfileComponent = connect(mapStateToProps,mapDispatchToProps)(WR);

export default ProfileComponent;
