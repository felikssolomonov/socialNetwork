import React, { Component } from "react";
import Users from "./Users.js";
import Loader from "./../Loader/Loader.js";
import {connect} from "react-redux";
import {follow, unfollow, setUsers, currentPage,
  totalUsersCount, isLoading, isDisabled,
  getUsers, sendFollow, sendUnfollow} from './../../redux/reducers/users_reducer.js';
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading,
    isDisabled: state.users.isDisabled
  }
}

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage: currentPage,
    setTotalUsersCount: totalUsersCount,
    setIsLoading: isLoading,
    setIsDisabled: isDisabled,
    getUsers,
    sendFollow,
    sendUnfollow
}

class UsersContainer extends Component {
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    render() {
        return (
          <div>
              <div>
                  {this.props.isLoading
                      ? <Loader/>
                      : <Users  totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                users={this.props.users}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                                setCurrentPage={this.props.setCurrentPage}
                                setUsers={this.props.setUsers}
                                getUsers={this.props.getUsers}
                                setIsLoading={this.props.setIsLoading}
                                setIsDisabled={this.props.setIsDisabled}
                                isDisabled={this.props.isDisabled}
                                sendFollow={this.props.sendFollow}
                                sendUnfollow={this.props.sendUnfollow}
                                />
                  }
              </div>
          </div>);
    }
}

const UsersComponent = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(UsersContainer);

export default UsersComponent;
