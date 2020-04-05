// import {usersAPI} from "./../../API/api.js";

const LOGIN = 'LOGIN';
const PASSWORD = 'PASSWORD';
const CONFIRM_PASSWORD = 'CONFIRM-PASSWORD';
// const IS_DISABLED = 'IS-DISABLED';

let initialState = {
	login: null,
	password: null,
	confirmPassword: null,
	isDisabled: true
};

const isDis = (l,p,c) => {
	if(l && p && c && p===c)
		return false;
	else
		return true;
}

const registrationReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN: {
			return {
				...state,
				isDisabled: isDis(action.login, state.password, state.confirmPassword),
				login: action.login
			}
		}
		case PASSWORD: {
			return {
				...state,
				isDisabled: isDis(state.login, action.password, state.confirmPassword),
				password: action.password
			}
		}
		case CONFIRM_PASSWORD: {
			return {
				...state,
				isDisabled: isDis(state.login, state.password, action.confirmPassword),
				confirmPassword: action.confirmPassword
			}
		}
		// case IS_DISABLED: {
		// 	return {
		// 		...state,
		// 		isDisabled: action.isDisabled
		// 	}
		// }
		// case LOADING: {
		// 	return {
		// 		...state,
		// 		isLoading: action.isLoading
		// 	}
		// }
		default:
			return state;
	}
}

export let setLogin = (login) => ({
  type: LOGIN,
	login
});

export let setPassword = (password) => ({
  type: PASSWORD,
	password
});

export let setConfirmPassword = (confirmPassword) => ({
  type: CONFIRM_PASSWORD,
	confirmPassword
});

// export let setIsDisabled = (isDisabled) => ({
//   type: IS_DISABLED,
// 	isDisabled
// });

// export let isLoading = (isLoading) => ({
//   type: LOADING,
// 	isLoading: isLoading
// });
//
//
import * as axios from "axios";

export const sendRegistration = () => {
	return (dispatch) => {
		alert("page");
		// dispatch(isLoading(true));
		// dispatch(currentPage(page));
		axios.post("http://localhost:3001/api/create"+id)
			.then(response => response.data);
		usersAPI.getUsersAPI(page, pageSize)
			.then(response => {
					dispatch(isLoading(false));
					dispatch(setUsers(response.items));
					dispatch(totalUsersCount(response.totalCount));
			});
	}
}
//
// export const sendFollow = (id) => {
// 	return (dispatch) => {
// 		dispatch(isDisabled(id, true));
// 		usersAPI.postFollowAPI(id).then(response => {
// 						// if (response.resultCode === 0) {
// 						dispatch(follow(id));
// 						dispatch(isDisabled(id, false));
// 						// }
// 				},
// 				error => {
// 						// if (response.resultCode === 0) {
// 						dispatch(follow(id));
// 						dispatch(iDisabled(id, false));
// 						// }
// 				});
// 	}
// }
//
// export const sendUnfollow = (id) => {
// 	return (dispatch) => {
// 		dispatch(isDisabled(id, true));
// 		usersAPI.deleteFollowAPI(id).then(response => {
// 						// if (response.resultCode === 0) {
// 						dispatch(unfollow(id));
// 						dispatch(isDisabled(id, false));
// 						// }
// 				},
// 				error => {
// 						// if (response.resultCode === 0) {
// 						dispatch(unfollow(id));
// 						dispatch(isDisabled(id, false));
// 						// }
// 				});
// 	}
// }

export default registrationReducer;
