import React, { Component } from "react";
import Users from "./Users.js";
import {connect} from "react-redux";
import {follow, unfollow, setUsers} from './../../redux/reducers/users_reducer.js'

let mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    }
  }
}

const UsersComponent = connect(mapStateToProps,mapDispatchToProps)(Users);


export default UsersComponent;
