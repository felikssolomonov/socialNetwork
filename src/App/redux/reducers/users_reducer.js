import {usersAPI} from "./../../API/api.js";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const LOADING = 'LOADING';
const DISABLING = 'DISABLING';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false,
	isDisabled: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(us => {
					if(us._id === action.userId) {
						return {...us, followed: true}
					}
					return us;
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(us => {
					if(us._id === action.userId) {
						return {...us, followed: false}
					}
					return us;
				})
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: action.users
			}
		}
		case CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.page
			}
		}
		case TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.count
			}
		}
		case LOADING: {
			return {
				...state,
				isLoading: action.isLoading
			}
		}
		case DISABLING: {
			return {
				...state,
				isDisabled: action.isDisabled
					?
					[...state.isDisabled, action.id]
					:
					state.isDisabled.filter(id => id != action.id)
			}
		}
		default:
			return state;
	}
}

export let follow = (userId) => ({
  type: FOLLOW,
	userId: userId
});

export let unfollow = (userId) => ({
  type: UNFOLLOW,
	userId: userId
});

export let setUsers = (users) => ({
  type: SET_USERS,
	users: users
});

export let currentPage = (page) => ({
  type: CURRENT_PAGE,
	page: page
});

export let totalUsersCount = (count) => ({
  type: TOTAL_USERS_COUNT,
	count: count
});

export let isLoading = (isLoading) => ({
  type: LOADING,
	isLoading: isLoading
});

export let isDisabled = (id, isDisabled) => ({
  type: DISABLING,
	id,
	isDisabled
});

export const getUsers = (page, pageSize) => {
	return (dispatch) => {
		dispatch(isLoading(true));
		dispatch(currentPage(page));
		usersAPI.getUsersAPI(page, pageSize)
			.then(response => {
					dispatch(isLoading(false));
					dispatch(setUsers(response.items));
					dispatch(totalUsersCount(response.totalCount));
			});
	}
}

export const sendFollow = (id) => {
	return (dispatch) => {
		dispatch(isDisabled(id, true));
		usersAPI.postFollowAPI(id).then(response => {
						// if (response.resultCode === 0) {
						dispatch(follow(id));
						dispatch(isDisabled(id, false));
						// }
				},
				error => {
						// if (response.resultCode === 0) {
						dispatch(follow(id));
						dispatch(iDisabled(id, false));
						// }
				});
	}
}

export const sendUnfollow = (id) => {
	return (dispatch) => {
		dispatch(isDisabled(id, true));
		usersAPI.deleteFollowAPI(id).then(response => {
						// if (response.resultCode === 0) {
						dispatch(unfollow(id));
						dispatch(isDisabled(id, false));
						// }
				},
				error => {
						// if (response.resultCode === 0) {
						dispatch(unfollow(id));
						dispatch(isDisabled(id, false));
						// }
				});
	}
}

export default usersReducer;
