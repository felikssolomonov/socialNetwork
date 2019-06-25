import React, { Component } from "react";
import Language from "./Language.js";
import {connect} from "react-redux";
import {addMenuItem, refreshText} from './../../redux/reducers/menu_reducer.js';

let mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    refreshText: () => {
      dispatch(refreshText());
    },
    addMenuItem: (body) => {
      dispatch(addMenuItem(body));
    }
  }
}

const LanguageComponent = connect(mapStateToProps,mapDispatchToProps)(Language);

export default LanguageComponent;
