import React, { Component } from "react";
import {usersAPI} from "./../../API/api.js";

class Profile extends Component {
    state = {
      editMode: false,
      status: this.props.status ? this.props.status : "..."
    }
    onClickStatusActive = () => {
      this.setState({editMode: true});
    }
    onClickStatusDeactive = () => {
      this.setState({editMode: false});
    }
    onStatusChange = (event) => {
      this.setState({status: event.target.value});
      this.props.setStatus(event.target.value);
    }
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
                    {
                      this.props.isDisabled.some(id => id === this.props.profile._id)
                      ?
                      <div>
                          { !this.state.editMode
                            ?
                            <span onClick={this.onClickStatusActive}>
                                Status: {this.props.status}</span>
                            :
                            <input  onBlur={this.onClickStatusDeactive}
                                    autoFocus={true} type="text"
                                    onChange={this.onStatusChange}
                                    value={this.props.status}/>
                          }
                      </div>
                      :
                      <div>
                        <span>Status: {this.props.status}</span>
                      </div>
                    }
                    <img width="250px" heigth="150px"
                        src={this.props.profile.photos.large
                              ? this.props.profile.photos.large
                              : "https://heritagevillagecincinnati.org/wp-content/uploads/2017/12/icon.png"}
                              />
                    <div>
                        {this.props.followed
                          ? <button disabled={this.props.isDisabled.some(id => id === this.props.profile._id)}
                                    onClick={()=>{
                                this.props.setIsDisabled(this.props.profile._id, true);
                                usersAPI.deleteFollowAPI(this.props.profile._id)
                                    .then(response => {
                                        // if (response.resultCode === 0) {
                                          this.props.setFollowing(false)
                                        // }
                                        this.props.setIsDisabled(this.props.profile._id, false);
                                    },
                                    error => {
                                        // if (response.resultCode === 0) {
                                          this.props.setFollowing(false)
                                        // }
                                        this.props.setIsDisabled(this.props.profile._id, false);
                                    });
                              }}>Unfollow</button>
                          : <button disabled={this.props.isDisabled.some(id => id === this.props.profile._id)}
                                    onClick={()=>{
                                this.props.setIsDisabled(this.props.profile._id, true);
                                usersAPI.postFollowAPI(this.props.profile._id)
                                    .then(response => {
                                        // if (response.resultCode === 0) {
                                          this.props.setFollowing(true)
                                        // }
                                        this.props.setIsDisabled(this.props.profile._id, false);
                                    },
                                    error => {
                                        // if (response.resultCode === 0) {
                                          this.props.setFollowing(true)
                                        // }
                                        this.props.setIsDisabled(this.props.profile._id, false);
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
