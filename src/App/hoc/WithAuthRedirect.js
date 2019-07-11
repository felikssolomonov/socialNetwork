import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export const withAuthRedirect = (Compon) => {
	class RedirectComponent extends Component {
    render() {
        if (!this.props.isAuth){
          return <Redirect to={"/login"} />
        }
        return <Compon {...this.props} />
    }
	}

	RedirectComponent = compose(connect(mapStateToProps))(RedirectComponent);

	return RedirectComponent;
}
