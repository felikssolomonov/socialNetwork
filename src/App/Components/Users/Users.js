import React, { Component } from "react";
import * as axios from "axios";

class Users extends Component {
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
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page="
          +this.props.currentPage+
          "&count="+this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPageChanged(number) {
      this.props.setCurrentPage(number);
      axios.get("https://social-network.samuraijs.com/api/1.0/users?page="
        +number+
        "&count="+this.props.pageSize)
          .then(response => {
              this.props.setUsers(response.data.items);
          });
    }
    componentDidUpdate() {
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
          pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p=>{
                      return <span key={p}>
                                <button onClick={()=>{this.onPageChanged(p)}}
                                    className={p === this.props.currentPage ? "selected" : ""}>
                                    {p+"-page..."}
                                </button>
                            </span>
                    })}
                </div>
                <div>
                    {this.props.users.map(item =>
                    <div className="article" key={item.id}>
                        <span>
                            <div>
                                <img width="50px" heigth="50px"
                                    src={item.photos.small ? item.photos.small : "https://cdn3.iconfinder.com/data/icons/people-professions/512/happy_A-512.png"}/>
                            </div>
                            <div>
                                {item.followed
                                  ? <button onClick={()=>{this.props.unfollow(item.id)}}>
                                        Unfollow</button>
                                  : <button onClick={()=>{this.props.follow(item.id)}}>
                                        Follow</button>}
                            </div>
                            <p>{item.id}</p>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {"item.location.country"}
                                </div>
                                <div>
                                    {"item.location.city"}
                                </div>
                            </span>
                        </span>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default Users;
