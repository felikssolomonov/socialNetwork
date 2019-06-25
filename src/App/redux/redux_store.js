import { combineReducers, createStore} from 'redux';
import menuReducer from "./reducers/menu_reducer.js";
import dialogsReducer from "./reducers/dialogs_reducer.js";

let reducers = combineReducers({
	menu: menuReducer,
	dialogs: dialogsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
