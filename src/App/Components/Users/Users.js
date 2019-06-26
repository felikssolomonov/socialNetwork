import React, { Component } from "react";


class Users extends Component {
    render() {
        let send = () => {
          this.props.setUsers([
          		{id: this.props.users.length+1, foto: "https://cdn3.iconfinder.com/data/icons/people-professions/512/happy_A-512.png", followed: true, fullName: "Feliks", status: "I need work", location: { country: "Russia", city: "Moscow"} }])
        }
        return (
            <div>
            <button onClick={send}>Add users</button>
                {this.props.users.map(item =>
                    <div className="article" key={item.id}>
                        <span>
                            <div>
                                <img width="50px" heigth="50px" src={item.foto}/>
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
                                    {item.fullName}
                                </div>
                                <div>
                                    {item.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {item.location.country}
                                </div>
                                <div>
                                    {item.location.city}
                                </div>
                            </span>
                        </span>
                    </div>)}
            </div>
        );
    }
}

export default Users;
