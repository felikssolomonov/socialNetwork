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

export default authReducer;
