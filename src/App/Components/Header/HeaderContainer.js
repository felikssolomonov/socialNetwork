import React, { Component } from "react";
import Header from "./Header.js";
import * as axios from "axios";
import {setUserData, isLoading} from './../../redux/reducers/auth_reducer.js';
import {connect} from "react-redux";
import { NavLink } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = {
    setUserData
}

class HeaderContainer extends Component {
    componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
          {withCredentials: true})
          .then(response => {
            if (response.data.resultCode === 0){
              let {id, email, login} = response.data.data;
              this.props.setUserData(id, email, login);
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
