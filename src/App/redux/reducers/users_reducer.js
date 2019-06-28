const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		{id: 1, photos: {small: "https://cdn.shopify.com/s/files/1/0743/4995/products/100-Emoji-Smiley-Face-Icons-1-Color-Sample01.jpg?v=1511740337", large: null},
			followed: true, name: "Feliks", status: "I need work"},
		{id: 2, photos: {small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9mnzE7xVbhY0124-082GmqUAO-fEjooPnYpG4E8WuqtfDKNz", large: null},
			followed: true, name: "Daniel", status: "I need learn"},
		{id: 3, photos: {small: "https://cdn3.iconfinder.com/data/icons/lightly-icons/30/652815-happy-grin-480.png", large: null},
			followed: true, name: "Alex", status: "I'm a gladiator"},
		{id: 4, photos: {small: "https://cdn4.iconfinder.com/data/icons/smiley-9/100/Laughing-512.png", large: null},
			followed: false, name: "John", status: "I in USA"},
		{id: 5, photos: {small: "https://cdn.shopify.com/s/files/1/1431/5776/products/squinty-smiling-face-emoji-rubber-stamp_1024x1024.png?v=1507158599", large: null},
			followed: false, name: "Vasya", status: "I like vodka"}
	]
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(us => {
					if(us.id === action.userId) {
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
					if(us.id === action.userId) {
						return {...us, followed: false}
					}
					return us;
				})
			}
		}
		case SET_USERS: {
			let length = state.users.length+1;
			action.users.map(item => {
				item.id = length++
			})
			return {
				...state,
				users: [
					...state.users,
					...action.users
				]
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

export default usersReducer;
