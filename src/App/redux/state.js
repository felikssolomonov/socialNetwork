const ADD_POST = 'ADD-POST';
const REFRESH_TEXT = 'REFRESH-TEXT';

let store = {
	_state: {
		data: [
		    {id: 1, name: "q"},
		    {id: 2, name: "w"},
		    {id: 3, name: "e"},
		    {id: 4, name: "r"},
		    {id: 5, name: "t"},
		],
		newText: "newText",
		menu: [
		    {id: "", name: "Главная"},
				{id: "myPage", name: "Моя Страница"},
				{id: "Messages", name: "Сообщения"},
				{id: "Friends", name: "Друзья"},
				{id: "Photos", name: "Фото"},
				{id: "Foo1", name: "MeItHe1"},
				{id: "Foo2", name: "MeItHe2"},
				{id: "Foo3", name: "MeItHe3"},
				{id: "Foo4", name: "MeItHe4"},
				{id: "Foo5", name: "MeItHe5"}
		],
		dialogs: [
				{
					name: "first",
					data: [
							{id: "1"},
							{id: "2"},
							{id: "3"},
							{id: "4"}
					],
				},
				{
					name: "second",
					data: [
							{id: "111"},
							{id: "222"},
							{id: "333"},
							{id: "444"}
					],
				}
		],
		profile: {
			data1: [
					{id: 1, name: "q"},
					{id: 2, name: "w"},
					{id: 3, name: "e"},
					{id: 4, name: "r"},
					{id: 5, name: "t"},
					{id: 55, name: "t55"}
			],
			data2: [
					{id: 1, name: "q"},
					{id: 2, name: "w"},
					{id: 3, name: "e"},
					{id: 4, name: "r"},
					{id: 5, name: "t"},
					{id: 55, name: "t55"}
			]
		}
	},
	// _ret() {
	// 	console.log("ret work");
	// },
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._ret = observer;
	},
	// addPost() {
	// 	let newPost = {
	// 		id: this._state.newText,
	// 		name: this._state.newText
	// 	};
	// 	this._state.menu.push(newPost);
	// 	this._state.newText = "";
	// 	this._ret(this._state);
	// },
	// addNewText(message) {
	// 	this._state.newText = message;
	// 	this._ret(this._state);
	// },
	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: this._state.newText,
				name: this._state.newText
			};
			this._state.menu.push(newPost);
			this._state.newText = "";
			this._ret(this._state);
		}
		else if (action.type === REFRESH_TEXT) {
			this._state.newText = action.message;
			this._ret(this._state);
		}
	}
};

// export let addPost = () => {
//   return {
//     type: ADD_POST
//   }
// }
// export let refreshText = (text) => {
//   return {
//     type: REFRESH_TEXT,
//     message: text
//   }
// }

export let addPost = () => ({
  type: ADD_POST
});
export let refreshText = (text) => ({
  type: REFRESH_TEXT,
  message: text
});

export default store;

// windows.store = store;
