import menuReducer from './reducers/menu_reducer.js';

let store = {
	_state: {
		data: [
		    {id: 1, name: "q"},
		    {id: 2, name: "w"},
		    {id: 3, name: "e"},
		    {id: 4, name: "r"},
		    {id: 5, name: "t"},
		],
		menu: {
			items: [
				{link: "", name: "Главная"},
				{link: "myPage", name: "Моя Страница"},
				{link: "Messages", name: "Сообщения"},
				{link: "Friends", name: "Друзья"},
				{link: "Photos", name: "Фото"},
				{link: "Foo1", name: "MeItHe1"},
				{link: "Foo2", name: "MeItHe2"},
				{link: "Foo3", name: "MeItHe3"},
				{link: "Foo4", name: "MeItHe4"},
				{link: "Foo5", name: "MeItHe5"}
			],
			textMenu: ""
		},
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
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._ret = observer;
	},
	dispatch(action) {
		this._state.menu = menuReducer(this._state.menu, action);
		this._ret(this._state);
	}
};

export default store;

// windows.store = store;
