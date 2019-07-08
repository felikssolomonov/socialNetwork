const ADD_MENU_ITEM = 'ADD-MENU-ITEM';
const REFRESH_TEXT = 'REFRESH-TEXT';

let initialState = {
	items: [
		{id: 1, link: "", name: "Главная"},
		{id: 2, link: "profile", name: "Профиль"},
		{id: 3, link: "messages", name: "Сообщения"},
		{id: 4, link: "users", name: "Люди"},
		{id: 5, link: "photos", name: "Фото"},
		{id: 6, link: "menu", name: "Меню"},
		{id: 7, link: "soundcloud", name: "Музыка"}
	],
	textMenu: "Enter name for a new menu item"
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MENU_ITEM: {
			let stateCopy = {...state};
			stateCopy.items = [...state.items,
				{id: state.items.length+1, link: state.textMenu+"link", name: state.textMenu}
			];
			stateCopy.textMenu = "";
			return stateCopy;
		}
		case REFRESH_TEXT: {
			let stateCopy = {...state};
			stateCopy.textMenu = action.textMenu;
			return stateCopy;
		}
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
