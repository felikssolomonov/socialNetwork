import React, { Component } from "react";


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
                </div>
              }
            </div>
        );
    }
}

export default Profile;
