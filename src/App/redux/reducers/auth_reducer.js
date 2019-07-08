import {isDisabled} from './users_reducer.js';
import {usersAPI} from "./../../API/api.js";

const SET_USER_DATA = 'SET-USER-DATA';
const LOADING = 'LOADING';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isLoading: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true
			}
		}
		case LOADING: {
			return {
				...state,
				isLoading: action.isLoading
			}
		}
		default:
			return state;
	}
}

export let setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
	data: {userId, email, login}
});

export let isLoading = (isLoading) => ({
  type: LOADING,
	isLoading: isLoading
});

export const setUserAuth = () => {
	return (dispatch) => {
		usersAPI.getAuthMeAPI().then(response => {
				if (response.resultCode === 0){
						let {id, email, login} = response.data;
						dispatch(setUserData(id, email, login));
						dispatch(isDisabled(id, true));
					}
				});
	}
}

export default authReducer;
