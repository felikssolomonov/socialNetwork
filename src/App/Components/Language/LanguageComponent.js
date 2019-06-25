import React, { Component } from "react";
import Language from "./Language.js";
import {connect} from "react-redux";
import {addMenuItem, refreshText} from './../../redux/reducers/menu_reducer.js';

let mapStateToProps = (state) => {
  return {
    textMenu: state.menu.textMenu
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    refreshText: (text) => {
      dispatch(refreshText(text));
    },
    addMenuItem: () => {
      dispatch(addMenuItem());
    }
  }
}

const LanguageComponent = connect(mapStateToProps,mapDispatchToProps)(Language);

export default LanguageComponent;
