import { combineReducers, createStore} from 'redux';
import menuReducer from "./reducers/menu_reducer.js";
import dialogsReducer from "./reducers/dialogs_reducer.js";
import usersReducer from "./reducers/users_reducer.js";
import profileReducer from "./reducers/profile_reducer.js";
import authReducer from "./reducers/auth_reducer.js";

let reducers = combineReducers({
	menu: menuReducer,
	dialogs: dialogsReducer,
	users: usersReducer,
	profile: profileReducer,
	auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
