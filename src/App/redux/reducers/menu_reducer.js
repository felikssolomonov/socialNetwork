const ADD_MENU_ITEM = 'ADD-MENU-ITEM';
const REFRESH_TEXT = 'REFRESH-TEXT';

let initialState = {
	items: [
		{link: "", name: "Главная"},
		{link: "myPage", name: "Страница"},
		{link: "Messages", name: "Сообщения"},
		{link: "Friends", name: "Друзья"},
		{link: "Photos", name: "Фото"},
		{link: "Menu", name: "Меню"}
	],
	textMenu: ""
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MENU_ITEM:
			state.items.push({link: state.textMenu+"link", name: state.textMenu},);
			state.textMenu = "";
			return state;
		case REFRESH_TEXT:
			state.textMenu = action.textMenu;
			return state;
		default:
			return state;
	}
}

export let addMenuItem = () => ({
  type: ADD_MENU_ITEM
});

export let refreshText = (text) => ({
  type: REFRESH_TEXT,
  textMenu: text
});

export default menuReducer;
