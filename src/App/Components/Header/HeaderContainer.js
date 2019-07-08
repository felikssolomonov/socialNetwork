import React, { Component } from "react";
import Header from "./Header.js";
import {setUserAuth} from './../../redux/reducers/auth_reducer.js';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = {
    setUserAuth
}

class HeaderContainer extends Component {
    componentDidMount() {
      this.props.setUserAuth();
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
