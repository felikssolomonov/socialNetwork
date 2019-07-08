const SET_TRACKS = 'SET-TRACKS';

let initialState = {
	tracks: [
	]
};

const soundcloudReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TRACKS: {
			return {
				...state,
				tracks: action.tracks
			}
		}
		default:
			return state;
	}
}

export let setTracks = (tracks) => ({
  type: SET_TRACKS,
	tracks
});

export default soundcloudReducer;
