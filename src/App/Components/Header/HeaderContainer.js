import React, { Component } from "react";
import Header from "./Header.js";
import {setUserData} from './../../redux/reducers/auth_reducer.js';
import {isDisabled} from './../../redux/reducers/users_reducer.js'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {usersAPI} from "./../../API/api.js";

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = {
    setUserData,
    setIsDisabled: isDisabled
}

class HeaderContainer extends Component {
    componentDidMount() {
      usersAPI.getAuthMeAPI().then(response => {
            if (response.resultCode === 0){
              let {id, email, login} = response.data;
              this.props.setUserData(id, email, login);
              this.props.setIsDisabled(id, true);
            }
          });
    }
    render() {
        return (
          <div className="header">
              <div className="login">
                  {this.props.isAuth
                    ?
                    <NavLink to={"/profile/"+this.props.userId}>
                        <Header {...this.props}/>
                    </NavLink>
                    :
                    <NavLink to="/login">
                    login
                    </NavLink>
                  }
              </div>
          </div>
        );
    }
}

HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);

export default HeaderContainer;
