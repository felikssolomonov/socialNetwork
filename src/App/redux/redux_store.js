import {combineReducers, createStore, applyMiddleware} from 'redux';
import menuReducer from "./reducers/menu_reducer.js";
import dialogsReducer from "./reducers/dialogs_reducer.js";
import usersReducer from "./reducers/users_reducer.js";
import profileReducer from "./reducers/profile_reducer.js";
import authReducer from "./reducers/auth_reducer.js";
import soundcloudReducer from "./reducers/soundcloud_reducer.js";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
	menu: menuReducer,
	dialogs: dialogsReducer,
	users: usersReducer,
	profile: profileReducer,
	auth: authReducer,
	soundcloud: soundcloudReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
