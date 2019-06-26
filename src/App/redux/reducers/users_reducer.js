const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		{id: 1, foto: "https://cdn.shopify.com/s/files/1/0743/4995/products/100-Emoji-Smiley-Face-Icons-1-Color-Sample01.jpg?v=1511740337", followed: true, fullName: "Feliks", status: "I need work", location: { country: "Russia", city: "Moscow"} },
		{id: 2, foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9mnzE7xVbhY0124-082GmqUAO-fEjooPnYpG4E8WuqtfDKNz", followed: true, fullName: "Daniel", status: "I need learn", location: { country: "Israel", city: "Rehovot"} },
		{id: 3, foto: "https://cdn3.iconfinder.com/data/icons/lightly-icons/30/652815-happy-grin-480.png", followed: true, fullName: "Alex", status: "I'm a gladiator", location: { country: "Macedonia", city: "Persepolis"} },
		{id: 4, foto: "https://cdn4.iconfinder.com/data/icons/smiley-9/100/Laughing-512.png", followed: false, fullName: "John", status: "I in USA", location: { country: "USA", city: "New-York"} },
		{id: 5, foto: "https://cdn.shopify.com/s/files/1/1431/5776/products/squinty-smiling-face-emoji-rubber-stamp_1024x1024.png?v=1507158599", followed: false, fullName: "Vasya", status: "I like vodka", location: { country: "Russia", city: "Taganrog"} }
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
