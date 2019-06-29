import React, { Component } from "react";
import Users from "./Users.js";
import Loader from "./../Loader/Loader.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {follow, unfollow, setUsers, currentPage, totalUsersCount, isLoading} from './../../redux/reducers/users_reducer.js'

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: (page) => {
//       dispatch(currentPage(page));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(totalUsersCount(totalCount));
//     },
//     setIsLoading: (loading) => {
//       dispatch(isLoading(loading));
//     }
//   }
// }

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage: currentPage,
    setTotalUsersCount: totalUsersCount,
    setIsLoading: isLoading
}

class UsersContainer extends Component {
    // constructor(props){
    //   super(props);
    // }
    // functionName() {
    //   let countPage = 0;
    //   let thisPage = 1;
    //   let sizePage = 50;
    //   function first(_callback, func) {
    //     _callback(func);
    //   }
    //   axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //       .then(
    //           response => {
    //               countPage = Math.ceil(response.data.totalCount/sizePage);
    //               let setter = this.props.setUsers;
    //               first(
    //                   (func) =>
    //                   {
    //                     while (thisPage<=countPage) {
    //                       axios.get("https://social-network.samuraijs.com/api/1.0/users?count="+sizePage+"&page="+thisPage)
    //                           .then(response => {
    //                               func(response.data.items);
    //                             });
    //                       thisPage++;
    //                     }
    //                   },
    //                   setter
    //               );
    //           }
    //       );
    // }
    componentDidMount() {
      this.props.setIsLoading(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page="
          +this.props.currentPage+
          "&count="+this.props.pageSize)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPageChanged(number) {
      this.setIsLoading(true);
      this.setCurrentPage(number);
      axios.get("https://social-network.samuraijs.com/api/1.0/users?page="
        +number+
        "&count="+this.pageSize)
          .then(response => {
              this.setIsLoading(false);
              this.setUsers(response.data.items);
          });
    }
    componentDidUpdate() {
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
                                />
                  }
              </div>
          </div>);
    }
}

const UsersComponent = connect(mapStateToProps,mapDispatchToProps)(UsersContainer);


export default UsersComponent;
