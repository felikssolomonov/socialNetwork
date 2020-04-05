import React, { Component } from "react";
import Login from "./Login.js";
import {connect} from "react-redux";
import {setLogin, setPassword, setConfirmPassword,
  sendRegistration} from './../../redux/reducers/registration_reducer.js';
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    login: state.registration.login,
    password: state.registration.password,
    confirmPassword: state.registration.confirmPassword,
    isDisabled: state.registration.isDisabled
  }
}

let mapDispatchToProps = {
    setLogin,
    setPassword,
    setConfirmPassword,
    sendRegistration
}

class LoginComponent extends Component {
    componentDidMount(){
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(){
      alert("добро пожаловать "+this.props.login+"!!!");
    }
    render() {
        return (
          <div>
                <label>Логин:
                    <input type="text" value={this.props.login ? this.props.login : ""}
                            onChange={()=>this.props.setLogin(event.target.value)}
                          />
                </label><p>{this.props.login}</p>
                <label>Пароль:
                    <input type="password" value={this.props.password ? this.props.password : ""}
                              onChange={()=>this.props.setPassword(event.target.value)}
                              />
                </label><p>{this.props.password}</p>
                <label>Подтвердите пароль:
                    <input type="password" value={this.props.confirmPassword ? this.props.confirmPassword : ""}
                              onChange={()=>this.props.setConfirmPassword(event.target.value)}
                              />
                </label><p>{this.props.confirmPassword}</p>
                <p><input type="submit" value="Send"
                              onClick={()=>this.props.sendRegistration()}  disabled={this.props.isDisabled}/></p>
              <Login/>
          </div>
        );
    }
}

LoginComponent = compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(LoginComponent);

export default LoginComponent;
