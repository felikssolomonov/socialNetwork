import React, { Component } from "react";
import Profile from "./Profile.js";
import Loader from "./../Loader/Loader.js";
import {connect} from "react-redux";
import {setUserProfile, refreshText, setFollowing, setProfile} from './../../redux/reducers/profile_reducer.js';
import {isDisabled} from './../../redux/reducers/users_reducer.js';
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    textMenu: state.profile.textMenu,
    followed: state.profile.followed,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.userId,
    isDisabled: state.users.isDisabled
  }
}

let mapDispatchToProps = {
    refreshText,
    setUserProfile,
    setProfile,
    setFollowing,
    setIsDisabled: isDisabled
}

class ProfileContainer extends Component {
    componentDidMount() {
      let f = () => {
        this.props.setProfile(userId);
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
                            setFollowing={this.props.setFollowing}
                            isDisabled={this.props.isDisabled}
                            setIsDisabled={this.props.setIsDisabled}/>
                : <Loader />}
          </div>
        );
    }
}

const ProfileComponent = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect,
  withRouter
)(ProfileContainer);

export default ProfileComponent;
