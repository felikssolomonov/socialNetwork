import {usersAPI} from "./../../API/api.js";

const DIALOGS = 'DIALOGS';
const MESSAGES = 'MESSAGES';
const OPENED_DIALOG = 'OPENED-DIALOG';
const USERS = 'USERS';
const USERS_NULL = 'USERS-NULL';
const USERS_INFO = 'USERS-INFO';

let initialState = {
	dialogs: [],
	messages: [],
	users: [],
	openedDialog: null
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case DIALOGS: {
			return {
				...state,
				dialogs: action.dialogs
			}
		}
		case MESSAGES: {
			return {
				...state,
				messages: action.messages
			}
		}
		case USERS: {
			// return {
			// 	...state,
			// 	users: [
			// 		...state.users,
			// 		action.users
			// 	]
			// }
			debugger;
			let a = {
				...state,
				users: [
					...state.users,
					action.users
				]
			}
			// let a = {
			// 	...state,
			// 	users: [
			// 		...state.users,
			// 		{
			// 			id: action.id,
			// 			data: action.users
			// 		}
			// 	]
			// }
			// let a = {
			// 	...state,
			// 	users: action.users
			// }
			return a;
		}
		case OPENED_DIALOG: {
			return {
				...state,
				openedDialog: action.dialogId
			}
		}
		default:
			return state;
	}
}

export let setDialogs = (dialogs) => ({
  type: DIALOGS,
	dialogs
});

export let setUsers = (users, id) => ({
  type: USERS,
	users,
	id
});

export let setMessages = (messages) => ({
  type: MESSAGES,
	messages
});

export let setOpenedDialog = (dialogId) => ({
  type: OPENED_DIALOG,
	dialogId
});

export const getDialogs = (id) => {
	return (dispatch) => {
		let arr = [];
		let users = [];
		usersAPI.getDialogs(id)
			.then(response => {
					dispatch(setDialogs(response));
					dispatch(getUsers(response, id));
			});
	}
}

export const getUsers = (dialogs, id) => {
	let arr = [];
	return (dispatch) => {
		dialogs.map(item => {
				item.users[0] == id
				?
				// id = item.users[1]
				// arr.push(item.users[1])
				arr.push(
					usersAPI.getUserById(item.users[1])
					.then(response => {
						return response;
						// dispatch(setUsers(response, id));
					})
				)
				:
				arr.push(
					usersAPI.getUserById(item.users[0])
					.then(response => {
						return response;
						// dispatch(setUsers(response, id));
					})
				)
		}).then(e => {
			dispatch(setUsers(arr, id))
		});
		// debugger;
		// arr;
		// dispatch(setUsers(arr, id));
	}
}

export const getMessages = (id) => {
	return (dispatch) => {
		usersAPI.getMessages(id)
			.then(response => {
					dispatch(setOpenedDialog(id));
					dispatch(setMessages(response));
			});
	}
}

export default dialogsReducer;
