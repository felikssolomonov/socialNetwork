import {usersAPI} from "./../../API/api.js";

const REFRESH_TEXT = 'REFRESH-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const FOLLOWED = 'FOLLOWED';

let initialState = {
	items: [],
	textMenu: "Enter name for a new menu item",
	profile: null,
	followed: null
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case REFRESH_TEXT: {
			let stateCopy = {...state};
			stateCopy.textMenu = action.textMenu;
			return stateCopy;
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case FOLLOWED: {
			return {
				...state,
				followed: action.followed
			}
		}
		default:
			return state;
	}
}

export let refreshText = (text) => ({
  type: REFRESH_TEXT,
  textMenu: text
});

export let setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
	profile
});

export let setFollowing = (followed) => ({
  type: FOLLOWED,
	followed
});

export const setProfile = (id) => {
	return (dispatch) => {
		usersAPI.getProfileAPI(id)
		  .then(response => {
					dispatch(setUserProfile(response));
		  });
		usersAPI.getFollowAPI(id)
			.then(response => {
				 	dispatch(setFollowing(response));
			});
	}
}

export default profileReducer;
