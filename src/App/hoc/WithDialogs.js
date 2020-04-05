import React, { Component } from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getDialogs} from './../redux/reducers/dialogs_reducer.js';

let mapStateToProps = (state) => {
	return {
		userId: state.auth.userId
	}
}

let mapDispatchToProps =  {
    getDialogs
}

export const withDialogs = (Compon) => {
	class DialogsComponent extends Component {
		componentDidMount() {
			this.props.getDialogs(this.props.userId);
    }
    render() {
        return <Compon {...this.props} />
    }
	}

	DialogsComponent = compose(connect(mapStateToProps, mapDispatchToProps))(DialogsComponent);

	return DialogsComponent;
}
