// import menuReducer from './reducers/menu_reducer.js';
//
// let store = {
// 	_state: {
// 		menu: {
// 			items: [
// 				{link: "", name: "Главная"},
// 				{link: "myPage", name: "Моя Страница"},
// 				{link: "Messages", name: "Сообщения"},
// 				{link: "Friends", name: "Друзья"},
// 				{link: "Photos", name: "Фото"},
// 				{link: "Foo1", name: "MeItHe1"},
// 				{link: "Foo2", name: "MeItHe2"},
// 				{link: "Foo3", name: "MeItHe3"},
// 				{link: "Foo4", name: "MeItHe4"},
// 				{link: "Foo5", name: "MeItHe5"}
// 			],
// 			textMenu: ""
// 		},
// 		dialogs: [
// 				{
// 					name: "first",
// 					data: [
// 							{message: "1"},
// 							{message: "2"},
// 							{message: "3"},
// 							{id: "4"}
// 					],
// 				},
// 				{
// 					name: "second",
// 					data: [
// 							{message: "111"},
// 							{message: "222"},
// 							{message: "333"},
// 							{message: "444"}
// 					],
// 				},
// 				{
// 					name: "three",
// 					data: [
// 							{message: "11111"},
// 							{message: "22222"},
// 							{message: "333333"},
// 							{message: "444444"}
// 					],
// 				}
// 		]
// 	},
// 	getState() {
// 		return this._state;
// 	},
// 	subscribe(observer) {
// 		this._ret = observer;
// 	},
// 	dispatch(action) {
// 		this._state.menu = menuReducer(this._state.menu, action);
// 		this._ret(this._state);
// 	}
// };
//
// export default store;
//
// // windows.store = store;
