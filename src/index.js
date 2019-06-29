import ReactDOM from 'react-dom';
import React, { Component } from "react";
import App from './App/App.js'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './App/redux/redux_store.js';

ReactDOM.render(
	<BrowserRouter>
			<Provider store={store}>
					<App state={store.getState()}/>
			</Provider>
	</BrowserRouter>, document.getElementById('app'));
