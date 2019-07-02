import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "./../../API/api.js";

class Users extends Component {
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
                                <button onClick={()=>{this.props.onPageChanged(p)}}
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
                            <NavLink to={"/profile/"+item.id}>
                                <img width="50px" heigth="50px"
                                    src={item.photos.small ? item.photos.small : "https://cdn3.iconfinder.com/data/icons/people-professions/512/happy_A-512.png"}/>
                            </NavLink>
                            <div>
                                {item.followed
                                  ? <button onClick={()=>{
                                        usersAPI.deleteFollowAPI(item.id).then(response => {
                                                if (response.resultCode === 0) {
                                                  this.props.unfollow(item.id)
                                                }
                                            });
                                      }}>Unfollow</button>
                                  : <button onClick={()=>{
                                        usersAPI.postFollowAPI(item.id).then(response => {
                                                if (response.resultCode === 0) {
                                                  this.props.follow(item.id)
                                                }
                                            });
                                      }}>Follow</button>}
                            </div>
                            <p>id:{item.id}</p>
                        </span>
                        <span>
                            <span>
                                <p>name:
                                    {item.name}
                                </p>
                                <div>status:
                                    {item.status
		                                  ? item.status
		                                  : "status is empty!!!"}
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
