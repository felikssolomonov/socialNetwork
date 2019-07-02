import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import * as axios from "axios";

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
                                        axios.delete("https://social-network.samuraijs.com/api/1.0/follow/"+item.id,
                                                    {withCredentials: true,
                                                    headers: {"API-KEY": "65431dc9-14fc-461c-bece-5b089a12f972"}
                                                    })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                  this.props.unfollow(item.id)
                                                }
                                            });
                                      }}>Unfollow</button>
                                  : <button onClick={()=>{
                                        axios.post("https://social-network.samuraijs.com/api/1.0/follow/"+item.id,
                                                    {}, {withCredentials: true,
                                                        headers: {"API-KEY": "65431dc9-14fc-461c-bece-5b089a12f972"}
                                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
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
