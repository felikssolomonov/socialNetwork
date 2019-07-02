import React, { Component } from "react";
import * as axios from "axios";

class Profile extends Component {
    render() {
        return (
            <div>
              {this.props.profile.resultCode === 1
                ?
                <div>
                    {this.props.profile.messages[0]}
                </div>
                :
                <div>
                    <h1>{this.props.profile.fullName}
                    <img width="40px" heigth="40px"
                        src={this.props.profile.lookingForAJob
                              ? "https://www.scambs.gov.uk/media/12178/jobs.png"
                              : "https://lcx.gwglife.com/wp-content/uploads/2018/02/Seniors-icon@2x-307x245-2127.png"}
                              />
                    </h1>
                    <img width="250px" heigth="150px"
                        src={this.props.profile.photos.large
                              ? this.props.profile.photos.large
                              : "https://heritagevillagecincinnati.org/wp-content/uploads/2017/12/icon.png"}
                              />
                    <div>
                        {this.props.followed
                          ? <button onClick={()=>{
                                axios.delete("https://social-network.samuraijs.com/api/1.0/follow/"+this.props.profile.userId,
                                            {withCredentials: true,
                                            headers: {"API-KEY": "65431dc9-14fc-461c-bece-5b089a12f972"}
                                            })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                          this.props.setFollowing(false)
                                        }
                                    });
                              }}>Unfollow</button>
                          : <button onClick={()=>{
                                axios.post("https://social-network.samuraijs.com/api/1.0/follow/"+this.props.profile.userId,
                                            {}, {withCredentials: true,
                                            headers: {"API-KEY": "65431dc9-14fc-461c-bece-5b089a12f972"}
                                            })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                          this.props.setFollowing(true)
                                        }
                                    });
                              }}>Follow</button>}
                    </div>
                </div>
              }
            </div>
        );
    }
}

export default Profile;
