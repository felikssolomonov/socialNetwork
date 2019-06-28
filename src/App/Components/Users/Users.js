import React, { Component } from "react";
import * as axios from "axios";

class Users extends Component {
    // constructor(props){
    //   super(props);
    // }
    componentDidMount() {
      alert("componentDidMount");
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
    }
    componentDidUpdate() {
      alert("componentDidUpdate");
    }
    render() {
        let send = () => {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
              this.props.setUsers(response.data.items);
            });
        }
        return (
            <div>
            <button onClick={send}>Add users</button>
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
        );
    }
}

export default Users;
