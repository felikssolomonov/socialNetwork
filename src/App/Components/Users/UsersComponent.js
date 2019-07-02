import React, { Component } from "react";
import Users from "./Users.js";
import Loader from "./../Loader/Loader.js";
import {connect} from "react-redux";
import {follow, unfollow, setUsers, currentPage, totalUsersCount, isLoading, isDisabled} from './../../redux/reducers/users_reducer.js';
import {usersAPI} from "./../../API/api.js";

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
    setIsDisabled: isDisabled
}

class UsersContainer extends Component {
    componentDidMount() {
      this.props.setIsLoading(true);
      usersAPI.getUsersAPI(this.props.currentPage, this.props.pageSize)
        .then(response => {
            this.props.setIsLoading(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        });
    }
    onPageChanged(number) {
      this.setIsLoading(true);
      this.setCurrentPage(number);
      usersAPI.getUsersAPI(number, this.pageSize)
        .then(response => {
            this.setIsLoading(false);
            this.setUsers(response.items);
        });
    }
    render() {
        return (
          <div>
              <div>
                  <button onClick={()=>{this.props.setIsLoading(true)}}
                      className={this.props.isLoading ? "selected" : ""}>
                      {"true"}
                  </button>
                  <button onClick={()=>{this.props.setIsLoading(false)}}
                      className={this.props.isLoading ? "" : "selected"}>
                      {"false"}
                  </button>
              </div>
              <div>
                  {this.props.isLoading
                      ? <Loader/>
                      : <Users  totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                users={this.props.users}
                                onPageChanged={this.onPageChanged}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                                setCurrentPage={this.props.setCurrentPage}
                                setUsers={this.props.setUsers}
                                setIsLoading={this.props.setIsLoading}
                                setIsDisabled={this.props.setIsDisabled}
                                isDisabled={this.props.isDisabled}
                                />
                  }
              </div>
          </div>);
    }
}

const UsersComponent = connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

export default UsersComponent;
