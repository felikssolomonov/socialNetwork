import React, { Component } from "react";
import Users from "./Users.js";
import {connect} from "react-redux";
import {follow, unfollow, setUsers, currentPage, totalUsersCount} from './../../redux/reducers/users_reducer.js'

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
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
    },
    setCurrentPage: (page) => {
      dispatch(currentPage(page));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(totalUsersCount(totalCount));
    }
  }
}

const UsersComponent = connect(mapStateToProps,mapDispatchToProps)(Users);


export default UsersComponent;
