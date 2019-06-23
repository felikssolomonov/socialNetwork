import ReactDOM from 'react-dom';
import React, { Component } from "react";
import App from './App/App.js'

import store from './App/redux/state.js';

let ret = (state) => {
	ReactDOM.render(<App 	state={state}
												dispatch={store.dispatch.bind(store)}
		/>, document.getElementById('app'));
};

ret(store.getState());
store.subscribe(ret);
